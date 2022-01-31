import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ContinentItem } from '../model/continent-item.model';
import { ContinentHttpService } from './continent-http.service';

@Injectable({
  providedIn: 'root'
})
export class ContinentService {

  constructor(private continentHttpService: ContinentHttpService) { }

  public getContinentList(): Observable<ContinentItem[]> {
    var url = "";
    return this.continentHttpService.httpGetRequestObservable(url).pipe(
      map((data: any) => {
        return data.map((o: any) => {
          return new ContinentItem(o);
        });
      })
    );
  }

  public saveContinent(
    continent: ContinentItem
  ): Observable<ContinentItem> {
    var url = '';
    return this.continentHttpService.httpPostRequestObservable(
      url,
      continent
    );
  }
}
