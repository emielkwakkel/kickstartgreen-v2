import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankingDashboardComponent } from './banking-dashboard.component';

describe('BankingDashboardComponent', () => {
  let component: BankingDashboardComponent;
  let fixture: ComponentFixture<BankingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BankingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
