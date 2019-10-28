import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmptyComponent} from './components/empty.component';
import {DetailComponent} from './components/detail.component';


const routes: Routes = [
  { path: 'team-product-details', children: [
      { path: '', component: DetailComponent }
  ]},
  { path: '**', component: EmptyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
