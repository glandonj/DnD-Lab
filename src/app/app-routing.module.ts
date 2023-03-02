import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutDetailComponent } from './Components/donut-detail/donut-detail.component';
import { DonutsComponent } from './Components/donuts/donuts.component';
import { FamousPeopleComponent } from './Components/famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './Components/famous-person-detail/famous-person-detail.component';

const routes: Routes = [
  { path: 'donuts', component: DonutsComponent},
  { path: 'donut/:id', component:DonutDetailComponent },
  { path: 'people', component:FamousPeopleComponent},
  { path: 'people/:id', component:FamousPersonDetailComponent},
  { path: '', redirectTo: '', pathMatch:'full'},
  { path: '**', redirectTo: 'people', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
