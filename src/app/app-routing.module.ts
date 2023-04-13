import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesHomeComponent } from './modules/home/pages-home/pages-home.component';

const routes: Routes = [
  {
    path: '',
    component:PagesHomeComponent, /** llamamos el componente a la vez que hacemos la carga */
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
