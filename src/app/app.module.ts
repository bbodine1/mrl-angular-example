import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '../material.module';
import { AppComponent } from './core/app.component';
import { TopnavComponent } from './shared/components/topnav/topnav.component';
import { SoldierDashboardComponent } from './core/views/soldier-dashboard/soldier-dashboard.component';

@NgModule({
  declarations: [AppComponent, TopnavComponent, SoldierDashboardComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
