export default interface UsuarioType {
    id_usuario?: number;
    usuario_us?: string;
    contraseña?: string;
    hash?:Promise<string>
    tipo_us?: string;
  }