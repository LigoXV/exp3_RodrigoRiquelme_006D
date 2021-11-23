import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    nomusuario:'',
    password:''
  }

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

  async presentAlert() {

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Bienvenid@',
      message: this.usuario.nomusuario , 
      buttons: ['Listo']
    });

    await alert.present();
  }

}


