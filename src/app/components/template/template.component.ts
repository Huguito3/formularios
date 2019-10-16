import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form){
    border: 1px solid red;
  }`]
})
export class TemplateComponent implements OnInit {
  ngOnInit() { }
  constructor() { }
  usuario: Object = {
    nombre: null,
    apelido: null,
    email: null,
    pais:'UY',
    sexo:'Hombre'
  };

  paises = [{codigo: 'UY', nombre: 'Uruguay'}, {codigo: 'BR', nombre: 'Brasil'}]

  guardar(forma: NgForm) {
    console.log('formulario posteado');
    console.log('ngForm', forma);
    console.log('valor', forma.value);
    console.log('Usuario', this.usuario);
  }
}
