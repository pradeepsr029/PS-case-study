import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDynamicallyDivRoutingModule } from './create-dynamically-div-routing.module';
import { CreateDynamicallyDivComponent } from './create-dynamically-div.component';

@NgModule({
  declarations: [CreateDynamicallyDivComponent],
  imports: [CommonModule, CreateDynamicallyDivRoutingModule],
})
export class CreateDynamicallyDivModule {}
