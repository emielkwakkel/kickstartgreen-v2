import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';

interface Overview {
  name: string;
  account: string;
  total: number;
  type: 'payment' | 'payments' | 'savings';
}

const ELEMENT_DATA: Overview[] = [
  {
    name: 'John Johannessen',
    account: 'Personal Payment',
    total: 231.26,
    type: 'payment',
  },
  {
    name: 'John & Johanna Johannessen',
    account: 'Shared Payment',
    total: 1422.76,
    type: 'payments',
  },
  {
    name: 'John Johannessen',
    account: 'Personal Savings',
    total: 1500,
    type: 'savings',
  },
];

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
  ],
  selector: 'banking-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewUiComponent {
  displayedColumns = ['type', 'name', 'total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
