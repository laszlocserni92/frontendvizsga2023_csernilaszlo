import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { ToysComponent } from './toys/toys.component';
import { NewPlushieComponent } from './new-plushie/new-plushie.component';
import { InventoryComponent } from './inventory/inventory.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'toys', component: ToysComponent },
  { path: 'new-plushie', component: NewPlushieComponent },
  { path: 'inventory', component: InventoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
