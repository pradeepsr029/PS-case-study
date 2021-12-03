import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalRouteCardRendererComponent } from './vertical-route-card-renderer.component';



@NgModule({
  declarations: [
    VerticalRouteCardRendererComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[VerticalRouteCardRendererComponent]
})
export class VerticalRouteCardRendererModule { }
