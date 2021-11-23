import { Component, OnInit } from '@angular/core';
import {MiapiService} from 'src/app/services/miapi.service';
import {Article} from '../../interfaces/interfaces';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  apii: Article[] = []

  componentes:Componente[] = [
    {
      icon:"receipt-outline",
      name: "Formulario de registro",
      redirecTo: "/formulario"
    },

    {
      icon:"bag-outline",
      name: "Productos",
      redirecTo: "/productos"
    },

    {
      icon: 'cloud-done-outline', 
      name: 'Crud', 
      redirecTo: '/crud'
    }
  ];

  constructor(private MiapiService: MiapiService) { }

  ngOnInit() {
    this.MiapiService.getTopHeadLines().subscribe(resp=>{
      console.log('miapi', resp);
      this.apii.push(...resp.articles)
    });
  }

}
