import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HallOfFameModel } from '../Models/hall-of-fame-model';

@Injectable({
  providedIn: 'root'
})
export class HallOfFameService {
  url:string="https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json";
  constructor(private http: HttpClient) { }

  getHallOfFame():Observable<HallOfFameModel>{
    return this.http.get<HallOfFameModel>(this.url);
  }
}
