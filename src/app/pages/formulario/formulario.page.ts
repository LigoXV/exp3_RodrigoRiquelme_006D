import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService, Crud } from 'src/app/services/crud.service';
import { Platform, ToastController, IonList} from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  crudd: Crud[] = [];
  newCrud: Crud = <Crud>{};
  @ViewChild('myList')myList :IonList; 

  constructor(private storageService: CrudService, 
    private plt: Platform, private toastController: ToastController) {
      this.plt.ready().then(()=>{
        this.loadDatos();       //llamamos a un método 
      });
    }

  ngOnInit() {
  }

  //get
  loadDatos(){
    this.storageService.getDatos().then(crudd=>{
      this.crudd=crudd;
    });
  }

   //create
   addDatos(){
    this.newCrud.modified = Date.now();
    this.newCrud.id = Date.now();
    this.storageService.addDatos(this.newCrud).then(crud=>{
      this.newCrud = <Crud>{};
      this.showToast('Nuevos datos agregados');
      this.loadDatos();
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }

  //update
  updateDatos(crud: Crud){
    crud.nombre = `UPDATED: ${crud.nombre}`;
    crud.modified = Date.now();
    this.storageService.updateDatos(crud).then(item=>{
      this.showToast('Datos actualizados')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  } 

  //delete
  deleteDatos(crud: Crud){
    this.storageService.deleteDatos(crud.id).then(item=>{
      this.showToast('Datos eliminados');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }


}
