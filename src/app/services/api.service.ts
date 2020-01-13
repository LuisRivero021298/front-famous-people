import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FamousPeople } from '../models/FamousPeople';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: any = Global.url;
	constructor(
		private _http: HttpClient
	) { }

	getFamousPeople(last: number = undefined): Observable<any>{
		return this._http.get(this.url+'/famous_people/'+last);
  }
	  
	getFamousPeopleById(id: any = undefined): Observable<any>{
		return this._http.get(this.url+'/famous_detail/'+id);
	}

  createFamous(famous: FamousPeople): Observable<any> {
  	let fp = JSON.stringify(famous); /*Convertir el objeto literal en un Json String */
  	let headers = new HttpHeaders().set('Content-Type', 'application/json');
  	return this._http.post(this.url+'/save', fp, {headers});
  }

  update(id: any = undefined, famousPeople: FamousPeople): Observable<any> {
		let fp = JSON.stringify(famousPeople);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url+'/famous_people/'+id, fp, {headers});
	}

  deleteFamous(id: any = undefined): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url+'/famous_people/'+id, {headers});
  }
}
