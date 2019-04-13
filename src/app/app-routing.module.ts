import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Testing Heroku is set up correctly.
// Test

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
