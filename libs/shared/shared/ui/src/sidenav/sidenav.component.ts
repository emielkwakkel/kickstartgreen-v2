import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, RoutesRecognized } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule,  } from '@angular/common';

export interface SideNavMenu {
  title: string;
  url: string;
  icon: string;
}

@Component({
  standalone: true,
  selector: 'shared-sidenav',
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @Input() menu: SideNavMenu[] = [];
  title = '';
  isHandset$?: Observable<boolean>;

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly router: Router
  ) {
    this.isHandset$ = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
    console.log(this.menu);
  }

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        const title = data.state.root.children[0].data['title'];
        this.title = title || this.title;
      }
    });
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
