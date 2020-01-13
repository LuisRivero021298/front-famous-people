import { Component, OnInit, OnChanges } from '@angular/core';
import { FamousPeople } from '../../models/FamousPeople';
import { ApiService } from '../../services/api.service';
import { PageEvent } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	public famousPeople: FamousPeople[] = [];
	page_size: number = 6;
	page_number: number = 1;

	constructor(
		private api: ApiService,
		private _router: Router,
		private _route: ActivatedRoute
	) {
		
	}

	ngOnInit() {
		this.getFp();
	}

	ngOnChanges(){
		//this.famousPeople = this.famousPeople;
	}

	handlePage(e: PageEvent) {
		this.page_size = e.pageSize;
		this.page_number = e.pageIndex + 1;
	}

	getFp(){
		this.api.getFamousPeople().subscribe((data) => {this.famousPeople = data.data;});
	}

	ngDoCheck() {

	}

	deleteFamous(data: any, i) {
		let _id = data.fp._id;
		this._route.params.subscribe(params => {
	      	this.api.deleteFamous(_id).subscribe(
	        res => {
	          if (res.status == 'success') {
	            let famous = res.data;
	            alert(`El famoso ${famous.first_name} a sido eliminado`);
	            this.getFp();
	          }
	        },
	        err => {
	          alert(`Don't delete`);
	        });
	    });
	}
}
