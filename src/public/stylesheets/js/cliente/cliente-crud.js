const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomstr= Math.random().toString(36).substring(0,num);       

    return randomstr;
}

const $id_cliente = document.getElementById('id_cliente')
$id_cliente.setAttribute('value',generateRandomString(7))