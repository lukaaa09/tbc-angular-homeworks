import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NotFoundComponent,
  ]
})
export class SharedModule { }
