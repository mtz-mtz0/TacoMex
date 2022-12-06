const usuario = (() => {
  const $bodyTable = document.getElementById("data");
  const BASE_URL ="/api/usuario";
  const $containerTable =document.getElementById("containerTable");

  const _getData = async () => {
      const response = await http.get(BASE_URL);
       $bodyTable.innerHTML="";
      for (let index = 0; index < response.length; index++) {
          const $row = _createRow(response[index], "id_usuario");
          $bodyTable.appendChild($row);
      }
  };


  const _actionButtonEditar = async (event) => {
    const $btn = event.target;
    const id_usuario = $btn.getAttribute("item-id");
    const response = await http.get(`${BASE_URL}?id_usuario=${id_usuario}`);
    formUsuarios.setData(response[0],'PUT');
    formUsuarios.setVisible(true);
  //  usuario._setVisible(false);
  };
  

  const _actionButtonEliminar = async (event) => {
    const $btn = event.target;
    const id_usuario = $btn.getAttribute("item-id");
    const response = await http.delete({url:`${BASE_URL}/${id_usuario}`});
    usuario.getData();
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
  $btn.className += "waves-effect waves-light btn green";
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
  _configureBtnNuevo;
};


const _configureBtnNuevo = () => {
  const $btnNuevo = document.getElementById("botonNuevo");
  $btnNuevo.addEventListener("click", () => {
    usuario.setVisible(false);
    formUsuarios.setVisible(true);
    usuario.setData({},'POST')
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

usuario.init();