import { Component } from '@angular/core';
import { Truco } from '../../models/truco';
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-trucos',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './trucos.component.html',
  styleUrl: './trucos.component.css'
})
export class TrucosComponent {

  public trucos: Truco[];

  constructor(){

    this.trucos=[
      new Truco('1. TIC TAC', 'Crea una variable de tipo string con el texto: "Lorem ipsum dolor sit amet,\
consectetur adipiscing elit. Phasellus mattis vehicula consequat. Proin dapibus\
nuncquam, nec dictum erat feugiat vitae".', 'Muestra el número de caracteres de esa variable.\
 Elimina los espacios en blanco de dicha variable y muéstralo por pantalla.', 'let phrase = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis vehicula consequat.\ Proin dapibus nuncquam, nec dictum erat feugiat vitae."\
console.log(phrase.length);\
console.log(phrase.replace(/ /g, ""));')
      
    ]
  }

}
