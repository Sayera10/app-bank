import { Component } from '@angular/core';
import { transferenciaEnviadas } from 'src/app/datos/enviadas-ejemplos';
@Component({
  selector: 'app-transferencias-enviadas',
  templateUrl: './transferencias-enviadas.component.html',
  styleUrls: ['./transferencias-enviadas.component.css']
})
export class TransferenciasEnviadasComponent {
  transferencias: any[] = transferenciaEnviadas;
}
