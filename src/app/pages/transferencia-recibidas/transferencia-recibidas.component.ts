import { Component } from '@angular/core';
import { transferenciaRecibidas } from 'src/app/datos/transferencias-ejemplo';


@Component({
  selector: 'app-transferencia-recibidas',
  templateUrl: './transferencia-recibidas.component.html',
  styleUrls: ['./transferencia-recibidas.component.css']
})
export class TransferenciaRecibidasComponent {
    transferencias: any[] = transferenciaRecibidas;
    
}
