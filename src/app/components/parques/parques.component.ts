import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'parques',
	templateUrl: './parques.component.html'

})
export class ParquesComponent implements OnChanges, OnInit, OnDestroy{
	@Input() nombre: string;
	@Input('metros_cuadrados') metros_cuadrados: number;
	public vegetacion: string;
	public abierto:boolean;
	@Output() pasameLosDatos = new EventEmitter();


	constructor(){
		this.nombre = 'Parque natural para caballos';
		this.metros_cuadrados = 450;
		this.vegetacion = 'Alta';
		this.abierto = true;
	}
	ngOnChanges(changes: SimpleChanges){
			console.log("Existen cambios");

	}
	ngOnInit(){
			console.log('Metodo on init lanzado');
	}
	ngOnDestroy(){
		console.log('Se va a elminar el component')
	}

	}
