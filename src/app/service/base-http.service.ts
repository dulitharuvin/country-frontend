import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Pager } from '../model/http/pager.model';

export class BaseHttpService {
  private apiUrl: string = '';
  private baseUrl: string = '';

  constructor(private httpClient: HttpClient, private serviceEndPoint: string) {
    this.apiUrl = environment.apiUrl + serviceEndPoint;
    this.baseUrl = environment.baseUrl;
  }

  public httpGetRequestObservable(url: string, pager?: Pager): Observable<any> {
    return this.httpClient.get(this.getFullUrl(url, pager), {
      headers: this.getHttpHeaders(),
    });
  }

  public httpPostRequestObservable(
    url: string,
    postBody?: Object
  ): Observable<any> {
    var body: Object = postBody ? postBody : {};
    return this.httpClient.post(this.getFullUrl(url), body, {
      headers: this.getHttpHeaders(),
    });
  }

  public httpPutRequestObservable(
    url: string,
    putBody?: Object
  ): Observable<any> {
    var body: Object = putBody ? putBody : {};
    return this.httpClient.put(this.getFullUrl(url), body, {
      headers: this.getHttpHeaders(),
    });
  }

  public httpDeleteRequestObservable(url: string): Observable<any> {
    return this.httpClient.delete(this.getFullUrl(url), {
      headers: this.getHttpHeaders(),
    });
  }

  private getFullUrl(url: string, pager?: Pager): string {
    if (!pager) return this.apiUrl + url;
    return this.apiUrl + url;
  }

  private getHttpHeaders() {
    var headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Cache-Control', 'no-cache');
    headers = headers.set('X-Requested-With', 'XMLHttpRequest');
    headers = headers.set('X-Device', 'Desktop');
    headers = headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
    headers = headers.set('rejectUnauthorized', 'false');
    return headers;
  }
}
