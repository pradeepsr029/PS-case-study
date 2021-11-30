import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { SortButtonModule } from 'src/app/shared/components/sort-button/sort-button.module';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, TableRoutingModule, HeaderModule, SortButtonModule],
})
export class TableModule {}
