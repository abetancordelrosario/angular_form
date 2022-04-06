import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "iron_ale", nombre: 'Alejandro', apellido: "Betancor Del Rosario", sexo: 'Masculino'},
    {usuario: "pepix", nombre: 'Pepa', apellido: "Santana", sexo: 'Femenino'}
  ];

  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario) {
    this.listUsuarios.unshift(usuario);
  }
}
