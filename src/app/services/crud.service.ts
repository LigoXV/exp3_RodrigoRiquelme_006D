import { Injectable } from '@angular/core';
import { Storage }  from '@ionic/storage';

export interface Crud{
  id: number;
  nombre: string;
  nomusuario: string;
  correo: string;
  contrasena: string;
  fono: number;
  modified:number;
}

const ITEMS_KEY = 'my-crud';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private _storage : Storage;

  constructor(private storage: Storage) {
    this.init();
   }
   async init(){
    const storage = await this.storage.create();
    this._storage= storage;
   }

   addDatos(crud: Crud):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((crudd : Crud[])=>{
     if (crudd) {
      crudd.push(crud);
      return this.storage.set(ITEMS_KEY, crudd);
     }else {
      return this.storage.set(ITEMS_KEY, [crud]);
     }
    })
  
   }
   getDatos(): Promise<Crud[]>{
    return this.storage.get(ITEMS_KEY);
   }
   updateDatos(crud: Crud): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((crudd : Crud[])=>{
     if (!crudd || crudd.length == 0){
      return null;
     }
     let newCrud: Crud[] = [];
     for (let i of crudd){
      if (i.id === crud.id){
       newCrud.push(crud);
      }
      else{
       newCrud.push(i);
      }
     }
     return this.storage.set(ITEMS_KEY, newCrud);
    });
   }
   deleteDatos(id: number): Promise<Crud>{
    return this.storage.get(ITEMS_KEY).then((crudd : Crud[])=>{
     if (!crudd || crudd.length === 0){
      return null;
     }
     let toKeep: Crud[] = []; 
     for (let i of crudd){
      if (i.id !== id){
       toKeep.push(i);
      }
     }
     return this.storage.set(ITEMS_KEY, toKeep);
    });
   }
}
