import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { ButtonRendererComponent } from './../button-renderer/button-renderer.component';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lifting-gear-search',
  templateUrl: './lifting-gear-search.component.html',
  styleUrls: ['./lifting-gear-search.component.scss']
})
export class LiftingGearSearchComponent {
 @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  model: NgbDateStruct;

  columnDefs: ColDef[] = [
        { field: 'make'  },
        { field: 'model'},
        { field: 'price'},
        {
              headerName: 'Actions',
              cellRenderer: ButtonRendererComponent,
              cellRendererParams: {
                onEdit: this.onEditButtonClick.bind(this),
                        onDelete: this.onDeleteButtonClick.bind(this),
              },
            },

    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxster', price: 72000 }
    ];

      // DefaultColDef sets props common to all Columns
      public defaultColDef: ColDef = {
        sortable: true,
        filter: true,
      };


    onEditButtonClick(params: any): void {
        console.log('Edit button clicked!', params);
        // Implement your edit logic here
      }

      onDeleteButtonClick(params: any): void {
        console.log('Delete button clicked!', params);
        // Implement your delete logic here
      }
}
