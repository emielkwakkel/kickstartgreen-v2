import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  QueryList,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Directive({
  selector: '[sharedHost]',
})
export class SharedDynamicComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

export interface DashboardCard {
  title: string;
  component: any;
  cols: number;
  rows: number;
  class?: string;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule
  ],
  selector: 'shared-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class SharedDashboardComponent implements AfterViewInit {
  @ViewChildren(SharedDynamicComponentDirective, { read: ViewContainerRef })
  containers!: QueryList<ViewContainerRef>;
  /** Based on the screen size, switch from standard to one column per row */
  @Input() cards!: DashboardCard[] | null;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (this.containers.length > 0) {
      // The container already exists
      this.initCards();
    }

    this.containers.changes.subscribe(() => {
      this.initCards();
    });
  }

  private initCards() {
    this.cards?.forEach((card: any, index: any) =>
      this.addComponent(card.component, index, card.data)
    );
    this.cd.detectChanges();
  }

  private addComponent(component: any, index: any, data: any) {
    const container = this.containers.toArray()[index];
    const factory = this.resolver.resolveComponentFactory(component);

    const createComponent: ComponentRef<typeof component> =
      container.createComponent(factory);
    createComponent.instance.data = data;
  }
}
