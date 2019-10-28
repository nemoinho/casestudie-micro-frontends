import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmptyComponent} from './components/empty.component';
import {StartComponent} from './components/start.component';


const routes: Routes = [
  { path: 'team-shopping-cart', children: [
    { path: '', component: StartComponent }
  ]},
  { path: '**', component: EmptyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
