import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent, SideNavMenu } from '@shared';

@Component({
  standalone: true,
  imports: [RouterModule, SidenavComponent],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  sidenavMenu: SideNavMenu[] = [
    {
      title: 'Banking',
      url: 'banking/dashboard',
      icon: 'account_balance',
    },
    {
      title: 'Plant trees',
      url: 'trees/dashboard',
      icon: 'forest',
    },
  ];
}
