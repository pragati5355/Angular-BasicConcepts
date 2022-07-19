import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstRouteComponent } from './first-route/first-route.component';
import { SecondRouteComponent } from './second-route/second-route.component';

const routes: Routes = [
  {
    path : 'firstroute' , component : FirstRouteComponent
  },
  {
    path : 'secondroute' , component : SecondRouteComponent
  },
  {
    path : '' ,redirectTo:'/firstroute',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
