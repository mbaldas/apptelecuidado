import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PacienteServiceProvider } from '../providers/paciente-service/paciente-service';

export const firebaseConfig = {
  apiKey: "AIzaSyCZogS9vCnxsXDBMbQFZq2IVtJNrHeR6x4",
  authDomain: "ionicfirebase-af820.firebaseapp.com",
  databaseURL: "https://ionicfirebase-af820.firebaseio.com",
  projectId: "ionicfirebase-af820",
  storageBucket: "ionicfirebase-af820.appspot.com",
  messagingSenderId: "26508403398"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PacienteServiceProvider
  ]
})
export class AppModule {}
