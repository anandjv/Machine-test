import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesModule } from '../tables/tables.module';
import { InfoComponent } from './info/info.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, InfoComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TablesModule,
    FormsModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AdminModule { }
