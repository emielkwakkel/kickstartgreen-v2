import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Overview {
  category:
    | 'shopping_basket'
    | 'credit_card'
    | 'store'
    | 'savings'
    | 'card_giftcar'
    | 'shop';
  account: string;
  amount: number;
  type: 'incoming' | 'outgoing';
}

const TRANSACTIONS_PAYMENTS: Overview[] = [
  {
    category: 'shopping_basket',
    account: 'Albert Heijn',
    amount: -14.22,
    type: 'outgoing',
  },
  {
    category: 'shop',
    account: 'Bakery Bloem',
    amount: -43.95,
    type: 'outgoing',
  },
  {
    category: 'credit_card',
    account: 'Credit card',
    amount: 100.0,
    type: 'incoming',
  },
  {
    category: 'store',
    account: 'Electron Blue',
    amount: -299.95,
    type: 'outgoing',
  },
  {
    category: 'shopping_basket',
    account: 'Jumbo',
    amount: -39.12,
    type: 'outgoing',
  },
];

const TRANSACTIONS_SAVINGS: Overview[] = [
  {
    category: 'savings',
    account: 'John Johanessen',
    amount: 250,
    type: 'incoming',
  },
  {
    category: 'savings',
    account: 'Johanna Johannessen',
    amount: 250,
    type: 'incoming',
  },
  {
    category: 'savings',
    account: 'John Johanessen',
    amount: 500,
    type: 'incoming',
  },
  {
    category: 'savings',
    account: 'Johanna Johannessen',
    amount: 500,
    type: 'incoming',
  },
  {
    category: 'savings',
    account: 'John Johanessen',
    amount: 500,
    type: 'incoming',
  },
];

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  getTransactions(account = 'payment'): Observable<Overview[]> {
    return of(
      account === 'payment' ? TRANSACTIONS_PAYMENTS : TRANSACTIONS_SAVINGS
    );
  }
}
