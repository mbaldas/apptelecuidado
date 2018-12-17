import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paciente } from '../../models/paciente/paciente.model';
import { PacienteServiceProvider } from '../../providers/paciente-service/paciente-service';



/**
 * Generated class for the CadastraPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'CadastraPacientesPage',
  segment: 'cadastra-pacientes'
})
@Component({
  selector: 'page-cadastra-paciente',
  templateUrl: 'cadastra-paciente.html',
})
export class CadastraPacientePage {

  paciente: Paciente = {
    nome: '',
    sexo: '',
    dataNascimento: '',
    telefone: undefined,
    endereco: '',
    instituicao: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private pacientesList: PacienteServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastraPacientePage');
  }

  cadastraPaciente(paciente: Paciente){
    this.pacientesList.create(paciente).then(ref => {
      this.navCtrl.setRoot('PacientesListPage', { key: ref.key })
    })
  }

}
