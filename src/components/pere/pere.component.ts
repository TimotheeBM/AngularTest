import { Component, OnInit } from '@angular/core';
import { BondService } from 'src/services/bond.service';
import { Filters } from 'src/model/filters';

@Component({
	selector: 'app-pere',
	templateUrl: './pere.component.html',
	styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {

	filters: Filters;

	constructor(private service: BondService) {
		this.service.filtersOb.subscribe(filters => {
			this.filters = filters;
			console.log(filters);
		})
	}

	ngOnInit() {
	}
}
