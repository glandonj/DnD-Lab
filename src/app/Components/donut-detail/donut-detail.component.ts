import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutDetailModel } from 'src/app/Models/donut-detail-model';
import { DonutService } from 'src/app/Services/donut.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent {
  constructor(private route:ActivatedRoute, private DonutDetailService:DonutService){}
  
  result:DonutDetailModel  = {} as DonutDetailModel;
  
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));
    console.log(id);


    this.DonutDetailService.getDonutDetail(id).subscribe((response:DonutDetailModel) => {
      this.result = response;
    });
  }
}
