export class User {
  id: number;
  usuario: string;
  contrasena: string;

  constructor(id: number, usuario: string, contrasena:string){
    this.id = id;
    this.usuario = usuario;
    this.contrasena = contrasena;

  }
}
