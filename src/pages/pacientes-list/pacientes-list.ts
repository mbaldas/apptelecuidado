import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Paciente } from '../../models/paciente/paciente.model';
import { PacienteServiceProvider } from '../../providers/paciente-service/paciente-service';

/**
 * Generated class for the PacientesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'PacientesListPage',
  segment: 'pacientes'
})
@Component({
  selector: 'page-pacientes-list',
  templateUrl: 'pacientes-list.html',
})
export class PacientesListPage {

  lista: Observable<Paciente[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private pacientesList: PacienteServiceProvider) {
    this.lista = this.pacientesList.getAll().valueChanges();
    console.log(this.lista);

    // this.lista = this.pacientesList.getAll().snapshotChanges().map(changes => {      //returs a db list e snapchotchanges retorna a chave e o valor
    //   return changes.map(p => ({                                 //mapeia os valores em um novo objeto com a key
    //     key: p.payload.key, ...p.payload.val()
    //   }));
    // });
  }

  // {
  //   key: 'value-here'
  //   name: 'teste'
  // }

  public cadastraPaciente(){
    this.navCtrl.push('CadastraPacientesPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PacientesListPage');
  }

}
