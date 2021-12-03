import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuideEntryRendererComponent } from './guide-entry-renderer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GuideEntryRendererComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [GuideEntryRendererComponent]
})
export class GuideEntryRendererModule { }
