import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, LogoModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
