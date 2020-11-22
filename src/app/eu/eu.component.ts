import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  Nome:string= "María Ana Collado Millan.";
  Idade:number= 52;
  Gosto:string="dançar, ioga, caminhar, escalar colinas, comer pizza, sorvetes é açai.";
  Nacionalidade:string="Venezuelana."
  urlImagen:string= "assets/foto maria ana.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
