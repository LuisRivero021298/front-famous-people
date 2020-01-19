import { Component, OnInit} from '@angular/core';
import { ListComponent } from './components/list/list.component'
import { Configurations } from './models/Configurations';
import { ConfiService } from './services/confi.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent{

  	title = 'front-famous-people';
  	conf: any[] = [];
  	color: string;

  	constructor(
		private api: ConfiService,
		private _router: Router,
		private _route: ActivatedRoute
	) {
		
	}
  	ngOnInit() {
  		this.api.getConf().subscribe((data) => {
			this.conf = data.data;
			let themeColor = this.conf[0].theme_color;
			this.darkMode(themeColor, 'active');
		});		
  	}

  	darkMode(theme: string = 'litgh', act: string = ''){
  		if(theme !== 'litgh'){
  			const btnSwitch = document.querySelector('#switch');
		
			document.body.classList.toggle(theme);
			btnSwitch.classList.toggle(act);
  		}
		
	}
}


