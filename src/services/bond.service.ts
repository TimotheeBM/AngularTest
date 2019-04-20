import { Injectable } from '@angular/core';
import { Filters } from 'src/model/filters';
import { Subject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BondService {

	filters: Filters;
	filtersSource: Subject<Filters>;
	filtersOb: Observable<Filters>;

	constructor() {
		this.filters = new Filters;
		this.filtersSource = new Subject<Filters>();
		this.filtersOb = this.filtersSource.asObservable();
	}

	getFilters() {
		return this.filters;
	}

	setFilters(filters: Filters) {
		this.filters = filters;
		this.filtersSource.next(filters);
	}
}