import { Component } from '@angular/core';
import { DonutListModel } from 'src/app/Models/donut-list-model';
import { DonutService } from 'src/app/Services/donut.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {
constructor(private donutsService:DonutService){

}

result:DonutListModel  = {} as DonutListModel;

ngOnInit(){
  this.donutsService.getDonutList().subscribe((response:DonutListModel) => {
    this.result = response;
  })
}

}
