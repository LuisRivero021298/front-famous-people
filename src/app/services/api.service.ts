import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FamousPeople } from '../models/FamousPeople';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  	constructor(
  		private _http: HttpClient
  	) { }

  	getFamousPeople(): Observable<any>{
  		return this._http.get('/ss');
  	}
}
