import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Paciente } from '../../models/paciente/paciente.model';

/*
  Generated class for the PacienteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PacienteServiceProvider {

  private pacientesListRef = this.db.list<Paciente>('pacientes')

  constructor(private db: AngularFireDatabase) {
    
  }

  getAll(){
    return this.pacientesListRef; 
  }

  create(paciente: Paciente){
    return this.pacientesListRef.push(paciente); 
  }

}
