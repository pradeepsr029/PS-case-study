import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSidebarComponent } from './app-sidebar.component';
import { GuideEntryRendererModule } from 'src/app/shared/components/guide-entry-renderer/guide-entry-renderer.module';


@NgModule({
  declarations: [
    AppSidebarComponent
  ],
  imports: [
    CommonModule,
    GuideEntryRendererModule
  ],
  exports:[AppSidebarComponent]
})
export class AppSidebarModule { }
