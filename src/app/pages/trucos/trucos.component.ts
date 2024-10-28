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
      new Truco('FLEXBOX FROGGY', 'Juego para aprender la propiedad CSS FlexBox', 'https://flexboxfroggy.com/#es', 'Juego'),
      new Truco('GRID ATTACK', 'Juego de aventura para adentrarte en CSS Grid.', 'https://codingfantasy.com/games/css-grid-attack/play', 'Juego')
    ]
  }

}
