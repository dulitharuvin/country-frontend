import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class ContinentHttpService extends BaseHttpService{

  constructor(httpClient: HttpClient) { 
    super(httpClient,"continents")
  }
}
