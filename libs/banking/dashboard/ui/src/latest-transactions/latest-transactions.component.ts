import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AccountService } from '@banking/account/util';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
  ],
  selector: 'banking-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.css'],
})
export class LatestTransactionsUiComponent implements OnInit {
  @Input() data: { account: string } = { account: 'payment' };
  displayedColumns = ['category', 'account', 'amount'];
  dataSource = new MatTableDataSource([{}]);

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService
      .getTransactions(this.data.account)
      .subscribe((transactions) => (this.dataSource.data = transactions));
  }
}
