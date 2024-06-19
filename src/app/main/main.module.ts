import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SidebarComponent } from './shared/components/sidebar.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    SidebarComponent,
  ]
})
export class MainModule { }
