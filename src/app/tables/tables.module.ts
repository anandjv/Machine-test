import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables/tables.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TablesComponent],
  imports: [
    CommonModule,
    NgxDatatableModule, //datatable
    CollapseModule,  //datatable collapse
    PaginationModule.forRoot(),
    FormsModule
  ],
  exports:[TablesComponent]

})
export class TablesModule { }
