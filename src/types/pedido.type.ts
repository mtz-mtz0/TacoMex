export default interface PedidoType {
    num_pedido?: number;
	fecha_ped?:Date;
	cantidadProd_ped?: number;
	montoTotal_ped?: string;
	estatus_ped?: string;
	id_local_ped?: number;
	Repartidor_id_repartidor?: number;
	id_cliente_ped?: number;
}