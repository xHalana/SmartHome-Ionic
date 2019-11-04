import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ServicesLivingRoomProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesLivingRoomProvider {
  data;


  constructor(public http: HttpClient) {
  }

  makeLedAction(operator: String, url: string): Observable<any> {
    this.http.get(`${url}/${operator}`)
      .subscribe(data => {
        console.log("ffff");
        this.data = data;
      });
    return this.data;
  }

  getTest(operator: String, url: string) {
    return this.http.get(`${url}/${operator}`);
  }

  getTest2() {

    return this.http.get('http://www.mocky.io/v2/5db955d430000075005ee1cc');
  }
}
