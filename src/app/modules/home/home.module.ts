import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShadowImgModule } from 'src/app/shared/components/shadow-img/shadow-img.module';
import { VerticalRouteCardRendererModule } from 'src/app/shared/components/vertical-route-card-renderer/vertical-route-card-renderer.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShadowImgModule,
    VerticalRouteCardRendererModule
  ]
})
export class HomeModule { }
