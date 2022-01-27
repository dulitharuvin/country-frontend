import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { CountryItem } from '../model/country.model';
import { CountryHttpService } from './country-http.service';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private countryHttpService: CountryHttpService) {}

  public getCountryList(
    continentId?: number,
    query?: string
  ): Observable<CountryItem[]> {
    var url = '/?continentId=$continentId$&query=$query$';
    var urlWithValues = url
    .replace("$continentId$", continentId != undefined ? continentId.toString() : "")
    .replace("$query$", query != undefined ? query : "");
    return this.countryHttpService.httpGetRequestObservable(urlWithValues).pipe(
      map((data: any) => {
        return data.map((o: any) => {
          return new CountryItem(o);
        });
      })
    );
  }
}
