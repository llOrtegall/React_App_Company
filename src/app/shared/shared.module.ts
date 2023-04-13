import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderNavComponent,
    FooterComponent,
    UserNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderNavComponent,
    FooterComponent,
    UserNavComponent,
  ]
})
export class SharedModule { }
