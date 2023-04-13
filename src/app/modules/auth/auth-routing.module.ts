import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesAuthComponent } from './pages-auth/pages-auth.component';

const routes: Routes = [
  {
    path:'',
    component: PagesAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
