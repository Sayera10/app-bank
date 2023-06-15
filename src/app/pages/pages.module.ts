import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TransferenciaRecibidasComponent } from './transferencia-recibidas/transferencia-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { FormsModule } from '@angular/forms';
import { ComponentesModule } from '../componentes/componentes.module';
import { NuevaTransferenciasComponent } from './nueva-transferencias/nueva-transferencias.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';



@NgModule({
  declarations: [
    TransferenciaRecibidasComponent,
    TransferenciasEnviadasComponent,
    NuevaTransferenciasComponent,
    MiCuentaComponent,
    TransferenciasComponent,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
   ComponentesModule,
   
  ]
})
export class PagesModule { }
