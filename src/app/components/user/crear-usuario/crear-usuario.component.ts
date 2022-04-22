import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UserComponent } from '../user.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  users: Usuario[] = [];

  sexo: any[] = ['Masculino', 'Femenino'];

  form: FormGroup;

  constructor(private fb: FormBuilder, private _usuario: UsuarioService, private router: Router, private activate: ActivatedRoute) { 
    let id = this.activate.snapshot.params['id']
    var user, name, apel, sex = ''
    this.cargarUsuarios()
    if(id !== undefined) {
      user = this.users[id].usuario
      name = this.users[id].nombre
      apel = this.users[id].apellido
      sex = this.users[id].sexo
      this.eliminarUsuario(id)
    }
    this.form = this.fb.group({
      usuario: [user, Validators.required],
      nombre: [name, Validators.required],
      apellido: [apel, Validators.required],
      sexo: [sex, Validators.required]

    })
  }

  ngOnInit(): void {
    
  }

  agregarUsuario() {
    const user: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo
    }
    this._usuario.agregarUsuario(user);
    this.router.navigate(['/user'])
  }

  cargarUsuarios() {
    this.users = this._usuario.getUsuario();
  }

  eliminarUsuario(index: number) {
    this._usuario.eliminarUsuario(index);
  }

}
