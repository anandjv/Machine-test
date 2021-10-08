import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Actions } from '../../models/shared'
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})


export class TablesComponent implements OnInit {
  @ViewChild('myTable') table: any;
  @Input() columns:{prop:string,name:string,title:string};
  @Input() rows:any;
  @Input() rowsPerPage:number;
  @Input() totalPages:number;
  @Input() currentPage:number;
  @Input() totalRows:number;
  @Input() actions:any;
  @Output() changedPage: EventEmitter<number> = new EventEmitter<number>();
  
  @Output() outputAction : EventEmitter<{type:string,value:string}> = new EventEmitter<{type:string,value:string}>();

  processingRow:any;
  currentRow:any;

  ngOnInit(): void {


  }
  onActivate(event) {
    this.currentRow=event.row;
}

  expanded: any = {};

  timeout: any;

  ColumnMode = ColumnMode;
  constructor() {
  }

  onPage(event): void {
    console.log(event);
  }

  pageChanged(event): void {
    this.changedPage.emit(event.page);
  }

  toggleExpandRow(row): void {
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event): void {
  }


  triggerAction(emmitorType)
  {
    this.processingRow=this.currentRow;
    this.outputAction.emit({ type: emmitorType, value:this.processingRow})
    this.processingRow={};

  }
  
}