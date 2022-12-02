const formProducto = (() => {
    const $containerForm = document.getElementById("containerForm");
    const $form = document.getElementById("formUsuario");
    const BASE_URL = "/api/usuarios";
    //
  
    const _setData = (item = {}, typeRender = "POST") => {
      const $inputNombreProducto = document.getElementById("nombreProducto");
      const $inputPrecioCompra = document.getElementById("precioCompra");
      const $precioVenta = document.getElementById("precioVenta");
      const $inputExistencia = document.getElementById("existencia");
      const { idProducto, nombreProducto, precioCompra, precioVenta, existencia } = item;
      $inputNombreProducto.value = nombreProducto;
      $inputPrecioCompra.value = precioCompra;
      $precioVenta.value = precioVenta;
      $inputExistencia.value = existencia;
      $form.setAttribute("method", typeRender);
      $form.setAttribute("item-id", idProducto);
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
  