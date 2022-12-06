const producto = (() => {
    const $bodyTable = document.getElementById("containerTable");
    const BASE_URL ="http://localhost:3000/api/producto";


  
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


      
    return {
        init: () => {
            _initElements();
        },
  
        _setVisible:_setVisible,
        getData:_getData
    };
  })();
  
  producto.init();