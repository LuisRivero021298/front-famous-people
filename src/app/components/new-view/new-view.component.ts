import { Component, OnInit } from '@angular/core';
import { FamousPeople } from '../../models/FamousPeople';
import { ApiService } from 'src/app/services/api.service'; 
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-new-view',
  templateUrl: './new-view.component.html',
  styleUrls: ['./new-view.component.css']
})
export class NewViewComponent implements OnInit {
	public famousPeople: FamousPeople;
	public status: string = '';
	public format = [
	    {cols: 2, rows:1},
	    {cols: 2, rows:1},
	    {cols: 2, rows:1},
	    {cols: 2, rows:1},
	    {cols: 2, rows:1},
	    {cols: 2, rows:1}
	];
  	constructor(
  		private _fService: ApiService,
  		private _route: ActivatedRoute,
  		private _router: Router
  	) { 
  		this.famousPeople = new FamousPeople('', '', '', '', '','',null);
  	}

	ngOnInit() {
	}

	create() {
		this._fService.createFamous(this.famousPeople).subscribe(
	      	res => {
		        if ( res.status == 'success') {
		          this.status = res.status;
		          this.famousPeople = res.data;

		          alert('Articulo creado con exito');
		          this._router.navigate(['/']);
		        } else {
		          this.status = 'error';
		          alert('Error al crear un artículo');
	        	}	
	      	},
	      	err => {
		        this.status = 'error';
		        alert('Error al crear un artículo');
	      	}
	    );
	}
}
