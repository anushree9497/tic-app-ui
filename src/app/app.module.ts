import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgApexchartsModule } from 'ng-apexcharts'
import { QuillModule } from 'ngx-quill';
import { AgGridModule } from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { LiftingGearComponent } from './lifting-gear/lifting-gear.component';
import { LiftingEquipmentComponent } from './lifting-equipment/lifting-equipment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonutPieChartComponent } from './donut-pie-chart/donut-pie-chart.component';
import { StackedColumnChartComponent } from './stacked-column-chart/stacked-column-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LiftingGearNewComponent } from './lifting-gear-new/lifting-gear-new.component';
import { LiftingGearUpdateComponent } from './lifting-gear-update/lifting-gear-update.component';
import { TableDisplayComponent } from './table-display/table-display.component';
import { SortableDirective } from './sortable.directive';
import { LiftingGearSearchComponent } from './lifting-gear-search/lifting-gear-search.component';
import { ButtonRendererComponent } from './button-renderer/button-renderer.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { CustomTemplateComponent } from './custom-template/custom-template.component';
import { DownloadDocumentComponent } from './download-document/download-document.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FrontPageComponent,
    LiftingGearComponent,
    LiftingEquipmentComponent,
    DashboardComponent,
    DonutPieChartComponent,
    StackedColumnChartComponent,
    AreaChartComponent,
    LineChartComponent,
    TypeaheadComponent,
    LiftingGearNewComponent,
    LiftingGearUpdateComponent,
    TableDisplayComponent,
    LiftingGearSearchComponent,
    ButtonRendererComponent,
    AuthComponent,
    HomeComponent,
    CallbackComponent,
    CustomTemplateComponent,
    DownloadDocumentComponent

  ],
  imports: [
    NgbModule,
    BrowserModule,
    AgGridModule,
    HttpClientModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    AppRoutingModule,
    SortableDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
