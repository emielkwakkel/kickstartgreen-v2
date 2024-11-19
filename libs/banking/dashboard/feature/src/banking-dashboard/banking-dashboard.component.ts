import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {
  OverviewUiComponent,
  LatestTransactionsUiComponent,
} from '@banking/dashboard/ui';
import { Observable } from 'rxjs';
import { DashboardCard, SharedDashboardComponent } from '@shared/ui';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    SharedDashboardComponent,
    MatIconModule,
    MatToolbarModule,
  ],
  selector: 'banking-dashboard',
  templateUrl: './banking-dashboard.component.html',
})
export class BankingDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards: Observable<DashboardCard[]>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.cards = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(({ matches }) => {
        return [
          {
            title: 'Overview',
            component: OverviewUiComponent,
            data: {},
            cols: 2,
            rows: 0.5,
          },
          {
            title: 'Latest transactions - Payment',
            component: LatestTransactionsUiComponent,
            data: { account: 'payment' },
            cols: matches ? 2 : 1,
            rows: 1,
          },
          {
            title: 'Latest transactions - Savings',
            component: LatestTransactionsUiComponent,
            data: { account: 'savings' },
            cols: matches ? 2 : 1,
            rows: 1,
          },
        ];
      })
    );
  }
}
