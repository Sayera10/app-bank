import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTransferenciasComponent } from './table-transferencias/table-transferencias.component';



@NgModule({
  declarations: [
    TableTransferenciasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableTransferenciasComponent
  ] 
})
export class ComponentesModule { }
