import { Component } from '@angular/core';

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {HttpClient} from "@angular/common/http";

interface AppState {
  message: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx';
  message$: Observable<string>;

  url = 'http://echo.jsontest.com/key/value/one/two'

  items = []

  constructor(private store: Store<AppState>,
              private http: HttpClient
   ){
    this.message$ = this.store.select('message')

    this.http.get(this.url).toPromise().then(data => {
      console.log(data)

      for(let key in data) {
        if(data.hasOwnProperty(key)){
          this.items.push(data[key])
        }
      }
    })


  }

  spanishMessage(){
    this.store.dispatch({type: 'SPANISH'})
  }

  frenchMessage(){
    this.store.dispatch({type:'FRENCH'})
  }
}
