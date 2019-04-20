import { Component, OnInit } from '@angular/core';
import { BondService } from 'src/services/bond.service';

@Component({
	selector: 'app-fils',
	templateUrl: './fils.component.html',
	styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

	constructor(private service: BondService) {
		this.service.setFilters({firstName: "tim", name: "bm"});
	}

	ngOnInit() {
	}

	sendUpdate() {
		this.service.setFilters({firstName: "moh", name: "mah"});
	}
}
