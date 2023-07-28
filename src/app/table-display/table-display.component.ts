import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from './../country';
import { TableService } from './../table.service';
import { SortableDirective, SortEvent } from './../sortable.directive';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-table-display',
	templateUrl: './table-display.component.html',
	providers: [TableService, DecimalPipe],
})
export class TableDisplayComponent {
	countries$: Observable<Country[]>;
	total$: Observable<number>;

	@ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

	constructor(public service: TableService) {
		this.countries$ = service.countries$;
		this.total$ = service.total$;
	}

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
	}
}
