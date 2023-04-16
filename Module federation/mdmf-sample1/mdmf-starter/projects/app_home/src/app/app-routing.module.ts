import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersAppRoutingModule } from 'projects/app_orders/src/app/app-routing.module';

const routes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
