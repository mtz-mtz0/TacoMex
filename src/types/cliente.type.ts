export default interface ClienteType {
    id_cliente?: number;
    nombre_cli?: string;
    apellidoP_cli?:string;
    apellidoM_cli?:string;
    sexo_cli?:string;
    fecha_nac?:Date;
    telefono?:string;
    idUsuario?: number;
    id_usuario_cli?:number;
    num_pedido_cli?:number;
    id_fotografia_cli?:number;
  }