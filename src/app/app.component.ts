import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   edadUno: number = 0;
   edadDos: number= 0;
   resul: number= 0;


  onBtn(){
    this.resul = (this.edadUno + this.edadDos)/2;
    console.log(this.resul);
  }

  onDel(){
    this.edadUno = 0;
    this.edadDos = 0;
    this.resul = 0;
  }
}
