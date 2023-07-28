import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-button-renderer',
  template: `
    <img src="assets/images/edit-tools.png" (click)="onEdit()" style="padding-right:10px; cursor:pointer">
    <img src="assets/images/trash.png" (click)="onDelete()" style="cursor:pointer">
  `,
})
export class ButtonRendererComponent implements ICellRendererAngularComp {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

    onEdit(): void {
      if (this.params.onEdit instanceof Function) {
        const params = {
          event: this.params.event,
          rowData: this.params.node.data,
        };
        this.params.onEdit(params);
      }
    }

    onDelete(): void {
      if (this.params.onDelete instanceof Function) {
        const params = {
          event: this.params.event,
          rowData: this.params.node.data,
        };
        this.params.onDelete(params);
      }
    }

  refresh(): boolean {
    return false;
  }
}
