import {Component, OnInit} from '@angular/core';
import {AppState} from './store/models/app-state.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import { v4 as uuid } from 'uuid';
import {ShoppingItem} from './store/models/shopping-item.model';
import {AddItemAction, RemoveItemAction} from './store/actions/shopping.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-shopping-list'

  shoppingItems$: Observable<Array<ShoppingItem>>
  newShoppingItem: ShoppingItem = { id: '', name: '' }

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.shoppingItems$ = this.store.select(store => store.shopping);

  }

  addItem() {
    this.newShoppingItem.id = uuid()

    this.store.dispatch(new AddItemAction(this.newShoppingItem));

    this.newShoppingItem = {id: '', name: ''};
  }

  removeItem(id: string) {
    this.store.dispatch(new RemoveItemAction(id));
  }
}
