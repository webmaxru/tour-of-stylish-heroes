import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `
    <mat-toolbar color="primary">
      <span>{{title}}</span>
    </mat-toolbar>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
