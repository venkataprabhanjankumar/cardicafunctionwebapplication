import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResultsComponent} from "./results/results.component";

const routes: Routes = [
  {path: '',redirectTo:'result',pathMatch: 'full'},
  {path: 'result',pathMatch: 'full',component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
