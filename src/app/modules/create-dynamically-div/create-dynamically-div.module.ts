import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateDynamicallyDivRoutingModule } from './create-dynamically-div-routing.module';
import { CreateDynamicallyDivComponent } from './create-dynamically-div.component';
import { HeaderModule } from 'src/app/layout/header/header.module';

@NgModule({
  declarations: [CreateDynamicallyDivComponent],
  imports: [CommonModule, CreateDynamicallyDivRoutingModule, HeaderModule],
})
export class CreateDynamicallyDivModule {}
