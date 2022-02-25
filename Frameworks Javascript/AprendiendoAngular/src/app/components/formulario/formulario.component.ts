import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;
  public campo:string;

  constructor() {
    this.user = {
      name: '',
      apellidos: '',
      bio: '',
      genero: ''
    };
    this.campo=""
  }

  ngOnInit(): void {
  }
  onSubmit(){//Método para el envio del formulario; se puede llamar de cualquier manera
    alert();
    console.log(this.user);
    
  }
  hasDadoClick(){
    alert('Has dado click');
  }
  hasSalido(){
    alert('Has salido del input');
  }
  hasDadoEnter(){
    alert('Has dado enter');
  }

}
