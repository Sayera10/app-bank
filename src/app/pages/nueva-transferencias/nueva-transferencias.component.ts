import { Component } from '@angular/core';
import { NuevaTransferencias } from 'src/app/datos/nueva-transferencias';
@Component({
  selector: 'app-nueva-transferencias',
  templateUrl: './nueva-transferencias.component.html',
  styleUrls: ['./nueva-transferencias.component.css']
})
export class NuevaTransferenciasComponent {
    importe: number = 0


    newTransfer(){
       console.log(this.importe)
       
    }

}
