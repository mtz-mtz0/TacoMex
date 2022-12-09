const formProducto = (() => {
    const $containerForm = document.getElementById("containerForm");
    const $form = document.getElementById("formProducto");
    const BASE_URL = "/api/producto";
    //
  
    const _setData = (item = {}, typeRender = "POST") => {
      const $inputNombreProducto = document.getElementById("nombre_pro");
      const $inputdescripcion_pro= document.getElementById("descripcion_pro");
      const $inputid_fotografia_pro = document.getElementById("id_fotografia_pro");
      const $inputprecio_pro = document.getElementById("precio_pro");
      const $inputcategoria_pro = document.getElementById("categoria_pro");
      const $inputestatus_pro = document.getElementById("estatus_pro");



      const { id_Producto, nombre_pro, descripcion_pro, id_fotografia_pro, precio_pro,categoria_pro, estatus_pro} = item;
      $inputNombreProducto.value = nombre_pro;
      $inputdescripcion_pro.value = descripcion_pro;
      $inputid_fotografia_pro.value = id_fotografia_pro;
      $inputprecio_pro.value = precio_pro;
      $inputcategoria_pro.value = categoria_pro;
      $inputestatus_pro.value = estatus_pro;


      $form.setAttribute("method", typeRender);
      $form.setAttribute("item-id", id_Producto);
      M.updateTextFields();
    };
  


    const _configureBtnCancelar = () => {
      const $btnCancelar = document.getElementById("btnCancelar");
      $btnCancelar.addEventListener("click", () => {
        formProducto.setVisible(false);
        producto.setVisible(true);
      });
    };
  
    const _configureBtnGuardar = () => {
      const $btnGuardar = document.getElementById("btnGuardar");
      $btnGuardar.addEventListener("click", () => {
          debugger
        const method = $form.getAttribute("method");
        const formData = new FormData($form);
        if (method.toUpperCase() === "POST") {
          _create(formData);
        }
  
        if (method === "PUT") {
          _update(formData);
        }
      });
    };


  
    const _create = async (formData) => {
      await http.post({url:BASE_URL,body: formData});
      formProducto.setVisible(false);
      producto.setVisible(true);
      producto.getData();
    };
  

    const _update = async (formData) => {
      const itemId = $form.getAttribute("item-id");
      await http.post({url:`${BASE_URL}/update/${itemId}`,body: formData});
      formProducto.setVisible(false);
      producto.setVisible(true);
      producto.getData();
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
  
  formProducto.init();
  