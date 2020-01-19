import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configurations } from '../models/Configurations';

@Injectable({
  providedIn: 'root'
})
export class ConfiService {
	private url: any = Global.url;

  	constructor(
  		private _http: HttpClient
  	) { }

  	getConf(): Observable<any> {
  		return this._http.get(this.url+'/configurations');
  	}

  	setConf(id: any = undefined, config: Configurations): Observable<any>{
  		let conf = JSON.stringify(config);
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this._http.put(this.url+'/update_configurations/'+id, conf, {headers});
  	}
}
