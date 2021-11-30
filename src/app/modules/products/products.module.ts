import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { ProductRenderedModule } from 'src/app/shared/components/product-rendered/product-rendered.module';
import { GridAndRowViewOptionModule } from 'src/app/shared/components/grid-and-row-view-option/grid-and-row-view-option.module';
import { SelectOptionsModule } from 'src/app/shared/components/select-options/select-options.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HeaderModule,
    ProductRenderedModule,
    GridAndRowViewOptionModule,
    SelectOptionsModule,
  ],
})
export class ProductsModule {}
