import { Component, OnInit } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  componentes:Componente[]=[
    {
      icon:"file-tray-full-outline",
      name:"Categorias",
      redirecTo:""
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
