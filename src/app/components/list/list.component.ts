import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	public famousPeople: Array<any>;

	constructor() {
		this.famousPeople = [
			{first_name: 'Cristiano', last_name: 'Dos Santos', 
			year_of_birth: '06-02-1986', sex: 'male', profession: 'athlete'},
			{first_name: 'Lionel', last_name: 'Messi', 
			year_of_birth: '10-06-1988', sex: 'male', profession: 'athlete'},
			{first_name: 'Luis', last_name: 'Rivero', 
			year_of_birth: '02-12-1998', sex: 'male', profession: 'dios'},
			{first_name: 'Jorge', last_name: 'Perez', 
			year_of_birth: '01-03-1982', sex: 'male', profession: 'cientifico'}
		];
	}

	ngOnInit() {
	
	}

}
