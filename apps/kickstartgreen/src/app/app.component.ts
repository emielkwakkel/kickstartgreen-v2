import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@shared';

@Component({
  standalone: true,
  imports: [RouterModule, SharedUiModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'kickstartgreen';
}
