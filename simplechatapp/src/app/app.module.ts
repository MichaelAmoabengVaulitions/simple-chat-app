import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Importing AngularFireModule
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
// This defines firebase project setings
export const firebaseConfig = {
  apiKey: 'AIzaSyDruMrjqTgrheRmPGK0Wdci_mGlH2HTpVA',
  authDomain: 'simplechatapp-33618.firebaseapp.com',
  databaseURL: 'https://simplechatapp-33618.firebaseio.com',
  storageBucket: 'simplechatapp-33618.appspot.com',
  messagingSenderId: '791672068579'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
