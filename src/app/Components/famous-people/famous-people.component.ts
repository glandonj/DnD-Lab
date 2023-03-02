import { Component } from '@angular/core';
import { HallOfFameModel } from 'src/app/Models/hall-of-fame-model';
import { HallOfFameService } from 'src/app/Services/hall-of-fame.service';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent {
constructor(private peopleService:HallOfFameService){}

result:HallOfFameModel = {} as HallOfFameModel;

ngOnInit(){
  this.peopleService.getHallOfFame().subscribe((response:HallOfFameModel)=>{
    this.result=response;
  })
}

}
