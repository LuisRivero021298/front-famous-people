import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FamousPeople } from '../../models/FamousPeople';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-detail-view',
	templateUrl: './detail-view.component.html',
	styleUrls: ['./detail-view.component.css']
})

export class DetailViewComponent implements OnInit {
  	public famousPeople: FamousPeople;
  	public format = [
	 	{cols: 4, rows:1},
	 	{cols: 4, rows:1},
	 	{cols: 4, rows:1},
	 	{cols: 4, rows:1},
	 	{cols: 2, rows:1},
	 	{cols: 2, rows:1}
  	];

	public format2 = [
		{cols: 4, rows:1},
	    {cols: 4, rows:1},
	    {cols: 4, rows:1},
	    {cols: 4, rows:1},
	    {cols: 2, rows:1},
	    {cols: 2, rows:1}
	]
  	constructor(
	 	private _route: ActivatedRoute,
	 	private _router: Router,
	 	private _api: ApiService
  	) { 
	 	this.famousPeople = new FamousPeople("","","","","","", null);
  	}

  	ngOnInit() {
	 	this._route.params.subscribe((params: Params) => {
			let id = params.id;
			this._api.getFamousPeopleById(id).subscribe((data) => {
		  		this.famousPeople = data.data;
			});
	 	});
  	}

  	update() {
  		let validate = this.validateForm(this.famousPeople);
		if (!validate){
			alert('Error');
		} else {
		 	this._route.params.subscribe( params => {
				let _id = params['id'];
				this._api.update(_id, this.famousPeople).subscribe(
				  	res => {
						if (res.status === 'success') {
							this.famousPeople = res.data;
							alert('Updated');
						}
				  	},
				  	err => {
					 	alert('Error ' + err);
				  	}
				);
		 	});
	 	}
  	}

  	validateForm(data: FamousPeople) {
		if(data.first_name === '' || data.last_name === '' || data.profession === '' ||
		   data.sex === '' || data.year_of_birth === '') {
			return false
		}
		return true;
	}
}
