import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PagesHomeComponent } from './pages-home/pages-home.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    PagesHomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
