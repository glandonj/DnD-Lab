import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutDetailModel } from '../Models/donut-detail-model';
import { DonutListModel } from '../Models/donut-list-model';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  url:string="https://grandcircusco.github.io/demo-apis/donuts.json";
  urlDetail:string="https://grandcircusco.github.io/demo-apis/donuts";
  constructor(private http: HttpClient) { }
  
  getDonutList():Observable<DonutListModel>{
    return this.http.get<DonutListModel>(this.url);
  }

  getDonutDetail(id:number):Observable<DonutDetailModel>{
    return this.http.get<DonutDetailModel>(`${this.urlDetail}/${id}.json`);
  }

}
