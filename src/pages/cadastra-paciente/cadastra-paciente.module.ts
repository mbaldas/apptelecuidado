import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastraPacientePage } from './cadastra-paciente';

@NgModule({
  declarations: [
    CadastraPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastraPacientePage),
  ],
})
export class CadastraPacientePageModule {}
