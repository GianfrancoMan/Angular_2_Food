import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { Fruit } from '../models/fruit.model';
import { Observable } from 'rxjs';
import { getImgPath } from '../models/functions';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http:HttpClient = inject(HttpClient);

  private URL_API:string = 'https://www.fruityvice.com/api/fruit/all';

  currentFruits:Fruit[] = [];


  constructor() { }

  public getData():Observable<Fruit[]> {
    return this.http.get<Fruit[]>(`https://corsproxy.io/?url=${this.URL_API}`);
  }

  public getImage(fruitName:string):string {
    let name = fruitName.replace(' ', '');

    return getImgPath(name);
  }

  public setCurrentFruits(fruits:Fruit[]): void {
    this.currentFruits = fruits;
  }

  public getCurrentFruits() {
    return this.currentFruits;
  }

}
