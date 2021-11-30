import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { ShadowImgModule } from 'src/app/shared/components/shadow-img/shadow-img.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, HeaderModule, ShadowImgModule],
})
export class HomeModule {}
