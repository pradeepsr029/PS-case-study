import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRenderedComponent } from './product-rendered.component';
import { ShadowImgModule } from '../shadow-img/shadow-img.module';

@NgModule({
  declarations: [ProductRenderedComponent],
  imports: [CommonModule, ShadowImgModule],
  exports: [ProductRenderedComponent],
})
export class ProductRenderedModule {}
