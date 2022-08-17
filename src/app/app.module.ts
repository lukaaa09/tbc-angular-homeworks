import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurencyConverterComponent } from './features/curency-converter/curency-converter.component';
import { HttpComponentComponent } from './features/http-component/http-component.component';
import { LoginComponent } from './features/login/login.component';
import { SharedModule } from './shared/shared.module';
import { UserComponent } from './features/user/user.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CurencyConverterComponent,
    LoginComponent,
    UserComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
