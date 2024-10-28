import { Component } from '@angular/core';
import { Trato } from '../../models/trato';
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-tratos',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './tratos.component.html',
  styleUrl: './tratos.component.css'
})
export class TratosComponent {

  public tratos: Trato[];

  constructor(){

    this.tratos=[
      new Trato('FLEXBOX FROGGY', 'Juego para aprender la propiedad CSS FlexBox', 'https://flexboxfroggy.com/#es', 'Juego', '/assets/images/frog.jpg' ),
      new Trato ('GRID ATTACK', 'Juego de aventura para adentrarte en CSS Grid.', 'https://codingfantasy.com/games/css-grid-attack/play', 'Juego', '/assets/images/grid.jpg')
    ]
  }
}


