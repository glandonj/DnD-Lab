import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DonutDetailComponent } from './Components/donut-detail/donut-detail.component';
import { DonutsComponent } from './Components/donuts/donuts.component';
import { FamousPeopleComponent } from './Components/famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './Components/famous-person-detail/famous-person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutDetailComponent,
    DonutsComponent,
    FamousPeopleComponent,
    FamousPersonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
