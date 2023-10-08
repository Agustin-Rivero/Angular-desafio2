import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'desafio-2';
  
  clientes = ["Leonel","Daniel", "Nicolas"];

  color: number = -1; 
}


