import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmptyComponent} from './components/empty.component';


const routes: Routes = [
  { path: 'team-product-details', children: [
      { path: '', component: EmptyComponent }
  ]},
  { path: '**', component: EmptyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
