import { Component, OnInit, OnChanges } from '@angular/core';
import { FamousPeople } from '../../models/FamousPeople';
import { Configurations } from '../../models/Configurations';
import { ApiService } from '../../services/api.service';
import { ConfiService } from '../../services/confi.service';
import { PageEvent } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	public famousPeople: FamousPeople[] = [];
	public copyFP: FamousPeople[] = [];
	public page_size: number = 6;
	public page_number: number = 1;
	public searchValue = "";
	public classActive: any = "";
	public conf: any[];

	constructor(
		private api: ApiService,
		private apiConf: ConfiService,
		private _router: Router,
		private _route: ActivatedRoute
	) {
		
	}

	ngOnInit() {
		this.getFamous();
		this.getConf();
	}

	darkMode(){
		this.getConf();
		
		let themeColor = this.conf[0].theme_color;
		let _id = this.conf[0]._id;
		var data = new Configurations(_id,'');

		if(themeColor !== 'dark'){
			data.theme_color = 'dark';
				
		} else {
			data.theme_color = 'ligth';
		}

		this.apiConf.setConf(_id, data).subscribe(
			res => {
				const btnSwitch = document.querySelector('#switch');
				document.body.classList.toggle('dark');
				btnSwitch.classList.toggle('active');
			},
			err => {
				console.log(err);
			}
		);	
		
	}

	handlePage(e: PageEvent) {
		this.page_size = e.pageSize;
		this.page_number = e.pageIndex + 1;
	}

	handleSearch(value: string = '') {
		console.log(value);
		this.searchValue = value;
		this.famousPeople = this.filterFamous(this.famousPeople, this.copyFP, undefined, value);
	}

	getFamous(){
		this.api.getFamousPeople().subscribe((data) => {
			this.famousPeople = data.data;
			this.copyFP = data.data; 
		});
	}

	getConf(){
		this.apiConf.getConf().subscribe((data) => this.conf = data.data);	
	}

	deleteFamous(data: any, i: any, length: any) {
		let _id = data.fp._id;
		this._route.params.subscribe(params => {
	      	this.api.deleteFamous(_id).subscribe(
	        res => {
	          if (res.status == 'success') {
	            let famous = res.data;
	            let deleteF = this.famousPeople.splice(i, 1);
				this.famousPeople = this.filterFamous(this.famousPeople, null, deleteF, null);
	            alert(`The famous ${famous.first_name} has been deleted`);
	          }
	        },
	        err => {alert(`Don't delete`)});
	    });
	}

	filterFamous(arr: any[], copiArr: any[] = [], famousDelete: any, search: string = '') {
		if(famousDelete !== undefined){
			let id = famousDelete.id;
			return arr.filter(fp => fp._id != id);
		}

		if(!search) return copiArr;

		return arr.filter(fp => fp.first_name.toUpperCase().includes(search.toUpperCase()) || 
    						 	fp.last_name.toUpperCase().includes(search.toUpperCase())  ||
    						 	fp.profession.toUpperCase().includes(search.toUpperCase()) ||
							 	fp.sex.toUpperCase().includes(search.toUpperCase()));
	}
}
