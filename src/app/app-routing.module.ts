import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

const routes: Routes =
[
  {
    path: 'propiedades',
    component: PropertyListComponent
  },
  {
    path: 'propiedades/:id',
    component: PropertyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PropertyListComponent, PropertyDetailsComponent];
