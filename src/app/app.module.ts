import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppRoutingModule } from './app-routing.module';
import { httpInterceptorProviders } from './common/http-interceptors';

import { GlobalLayoutComponent } from './global-layout/global-layout.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    GlobalLayoutComponent,
    PagesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
