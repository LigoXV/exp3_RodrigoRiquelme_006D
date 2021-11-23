import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MiapiService {

  constructor(private http:HttpClient) { }

  getTopHeadLines()
  {
    return this.http.get<RespuestaToHeadLines>
    ('https://newsapi.org/v2/everything?q=apple&from=2021-11-01&to=2021-11-01&sortBy=popularity&apiKey=c49b78cd734f421c8d8149927d235fc6')
    
  }
}
