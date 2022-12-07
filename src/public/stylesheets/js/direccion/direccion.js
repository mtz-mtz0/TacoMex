const direccion = (() => {
    const $bodyTable = document.getElementById("data");
    const BASE_URL ="/api/direccion";
    const $containerTable =document.getElementById("containerTable");
  
    const _getData = async () => {
        const response = await http.get(BASE_URL);
         $bodyTable.innerHTML="";
        for (let index = 0; index < response.length; index++) {
            const $row = _createRow(response[index], "id_Direccion");
            $bodyTable.appendChild($row);
        }
    };
  
  
    const _actionButtonEditar = async (event) => {
      const $btn = event.target;
      const id_Direccion = $btn.getAttribute("item-id");
      const response = await http.get(`${BASE_URL}?id_Direccion=${id_Direccion}`);
      formDireccion.setData(response[0],'PUT');
      formDireccion.setVisible(true);
        direccion.setVisible(false);
    };
  
    const _actionButtonEliminar = async (event) => {
      const $btn = event.target;
      const id_Direccion= $btn.getAttribute("item-id");
      const response = await http.delete({url:`${BASE_URL}/${id_Direccion}`});
      direccion.getData();
    };
  
  
    const _createRow = (item = {}, itemId = "") => {
      const $row = document.createElement("tr");
      for (const key in item) {
          const value = item[key];
          if(value==null){
          const $td = document.createElement("td");
          $td.innerText = "#";
          $row.appendChild($td);
          }else{
          const $td = document.createElement("td");
          $td.innerText = value;
          $row.appendChild($td);
          }
  
  
      }
      $row.appendChild(_createBtnAction(item[itemId], "Editar",_actionButtonEditar));
  
      $row.appendChild(_createBtnAction(item[itemId], "Eliminar",_actionButtonEliminar));
      return $row;
  };
  
  
  const _createBtnAction = (itemId = 0, labelBtn = "", _actionFuntion = () => {}) => {
    const $btn = document.createElement("button");
    $btn.innerText = labelBtn;
    $btn.className += "waves-effect waves-light btn red";
    $btn.setAttribute("item-id", itemId);
    $btn.addEventListener("click", _actionFuntion);
    return $btn;
  };
  
  
  const _setVisible = (visible = true) => {
    if (visible) {
      $containerTable.classList.remove("hide");
    } else {
      $containerTable.classList.add("hide");
    }
  };
  
  
  
  const _initElements = () => {
    _getData();
    _configureBtnNuevo();
  };
  
  const _configureBtnNuevo = () => {
    const $btnNuevo = document.getElementById("btnNuevo");
    $btnNuevo.addEventListener("click", () => {
      direccion.setVisible(false);
      formDireccion.setVisible(true);
      direccion.setData({},'POST')
    });
  };
  
  
  
  
    return {
        init: () => {
            _initElements();
        },
  
        _setVisible:_setVisible,
        getData:_getData
    };
  })();
  
  direccion.init();