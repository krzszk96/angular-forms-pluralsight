import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexboxComponent } from './components/flexbox/flexbox.component';

import { AppComponent } from './app.component';
import { UserSettingsFormComponent } from './components/user-settings-form/user-settings-form.component';
import { MaterialModule } from './shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { AddreaderComponent } from './components/addreader/addreader.component';


@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFormComponent,
    FlexboxComponent,
    DashboardComponent,
    HeaderComponent,
    AddbookComponent,
    AddreaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
