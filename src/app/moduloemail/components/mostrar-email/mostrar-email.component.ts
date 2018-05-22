import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `<div *ngIf="emailContacto"><h4>{{title}}</h4><strong>Email de contacto:</strong>{{emailContacto}}<button (click)="borrarEmail()">Eliminar email de contacto</button></div>`
})
export class MostrarEmailComponent implements DoCheck, OnInit {
  title = 'mostrar email';
  emailContacto: string;

  ngOnInit(){
  	this.emailContacto = localStorage.getItem('emailContacto');
  	//console.log(localStorage.getItem('emailContacto'));
  }
  ngDoCheck(){
  	this.emailContacto = localStorage.getItem('emailContacto');
		//console.log('El DoCheck se ha ejecutado');
	}

	borrarEmail(){
		localStorage.removeItem('emailContacto');
		localStorage.clear();
		this.emailContacto = null;
	}

}
