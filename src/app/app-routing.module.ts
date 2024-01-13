import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixthwebpageComponent } from './sixthwebpage/sixthwebpage.component';

const routes: Routes = [
  { path : '' , component : SixthwebpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
