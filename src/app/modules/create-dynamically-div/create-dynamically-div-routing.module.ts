import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDynamicallyDivComponent } from './create-dynamically-div.component';

const routes: Routes = [
  {
    path: '',
    component: CreateDynamicallyDivComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDynamicallyDivRoutingModule {}
