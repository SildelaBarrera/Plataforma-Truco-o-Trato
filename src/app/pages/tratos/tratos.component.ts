import { Component } from '@angular/core';
import { Trato } from '../../models/trato';

@Component({
  selector: 'app-tratos',
  standalone: true,
  imports: [Trato],
  templateUrl: './tratos.component.html',
  styleUrl: './tratos.component.css'
})
export class TratosComponent {

  public trato: Trato 

  constructor(title: string, description: string){
    this.trato = new Trato (title, description);

}
}