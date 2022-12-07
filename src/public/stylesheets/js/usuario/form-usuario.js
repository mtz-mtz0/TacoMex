const formUsuarios = (() => {
    const $containerForm = document.getElementById("containerForm");
    const $form = document.getElementById("formUsuario");
    const BASE_URL ="/api/usuario";
    //
  
    const _setData = (item = {}, typeRender = "POST") => {
      const $inputNombreUsuario = document.getElementById("usuario_us");
      const $inputContraseña = document.getElementById("contraseña");
      const $tipo_us = document.getElementById("tipo_us");

      const { id_usuario, usuario_us, contraseña, tipo_us} = item;

      $inputNombreUsuario.value = usuario_us;
      $inputContraseña.value = contraseña;
      $tipo_us.value = tipo_us;
      $form.setAttribute("method", typeRender);
      $form.setAttribute("item-id", id_usuario);
      M.updateTextFields();
    };
  


    const _configureBtnCancelar = () => {
      const $btnCancelar = document.getElementById("btnCancelar");
      $btnCancelar.addEventListener("click", () => {
        formUsuarios.setVisible(false);
        usuario.setVisible(true);
      });
    };



  
    const _configureBtnGuardar = () => {
      const $btnGuardar = document.getElementById("btnGuardar");
      $btnGuardar.addEventListener("click", () => {
          debugger
        const method = $form.getAttribute("method");
        const formData = new FormData($form);
        if (method.toUpperCase() === "") {
          _create(formData);
        }
  
        if (method === "POST") {
          _update(formData);
        }
      });
    };




  
    const _create = async (formData) => {
      await http.post({url:BASE_URL,body: formData});
      formUsuarios.setVisible(false);
      usuario.setVisible(true);
      usuario.getData();
    };


  
    const _update = async (formData) => {
      const itemId = $form.getAttribute("item-id");
      await http.post({url:`${BASE_URL}/update/${itemId}`,body: formData});
      formUsuarios.setVisible(false);
      usuario.setVisible(true);
      usuario.getData();
    };

  



    const _setVisibleForm = (visible = true) => {
      if (visible) {
        $containerForm.classList.remove("hide");
      } else {
        $containerForm.classList.add("hide");
      }
    };


  
    const _init = () => {
      _configureBtnCancelar();
      _configureBtnGuardar();
    };
  
    return {
      setData: _setData,
      setVisible: _setVisibleForm,
      init: _init,
    };
  })();
  
  formUsuarios.init();
  