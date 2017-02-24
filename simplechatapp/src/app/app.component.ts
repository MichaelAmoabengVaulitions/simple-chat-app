import { Component } from '@angular/core';
//Importing angular-fire specific functions
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  name: any;
  msgVal: string = '';

//Using dependency injection in our constructor to work with AngularFire that we imported
  constructor(public af: AngularFire) {
   this.items = af.database.list('/messages', {
     query: {
       limitToLast: 6
     }
   });

   this.af.auth.subscribe(auth => {
     if(auth) {
       this.name = auth;
     }
   });
 }

 //Login method that will be called in the html template
 login() {
   this.af.auth.login({
     provider: AuthProviders.Facebook,
     method: AuthMethods.Popup
   });
 }
 //This method pushes messages to firebaseConfig
 chatSend(theirMessage: string) {
      this.items.push({ message: theirMessage, name: this.name.facebook.displayName});
      this.msgVal = '';
  }

//Logout method that will be called in the html template
  logout() {
     this.af.auth.logout();
  }

}
