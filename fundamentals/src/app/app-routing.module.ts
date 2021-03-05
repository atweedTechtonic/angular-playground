import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

// import and add components as objects in the Routes array
const routes: Routes = [
  { path: '', component: HomeComponent }, // --> '/'
  { path: 'list', component: ListComponent }, // --> '/list'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
