import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewUiComponent } from './overview.component';

describe('DashboardComponent', () => {
  let component: OverviewUiComponent;
  let fixture: ComponentFixture<OverviewUiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewUiComponent],
      imports: [NoopAnimationsModule, LayoutModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  Array.from({ length: 200 }, (_, idx) => ++idx).forEach((index) => {
    it(`should return index ${index}`, (done) => {
      setTimeout(() => {
        expect(index).toBe(index);
        done();
      }, 150);
    });
  });
});
