import { NgModule }from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import {  DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent} from './dashboard.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    ChartsModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,

    // HeroDetailComponent
  ],
  // providers: [ HeroService ]
})
export class DashboardModule {}
