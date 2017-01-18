import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RecordsModule } from './records/records.module';
import { RecordService } from './shared/services/record/record.service';
import { ApiService } from './shared/services/api/api.service';
import { MockBackendService } from './shared/services/mock-backend/mock-backend.service';
import { StoreHelper } from './shared/services/store/store-helper';
import { Store } from './shared/services/store/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DashboardModule,
    RecordsModule,
    HttpModule,
    // make sure import after http module
    InMemoryWebApiModule.forRoot(MockBackendService, {delay: 800})
  ],
  providers: [RecordService, ApiService, Store, StoreHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
