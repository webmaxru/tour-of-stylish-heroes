## Branch master

Original Tour of Heroes

## Branch step1 - Initial Angular Material setup

`npm install --save @angular/material @angular/cdk`

__app.module.ts__

`import { MdToolbarModule } from '@angular/material';`

declarations:
`MdToolbarModule`

__app.component.html__

```html
<md-toolbar color="primary">
    <span>{{title}}</span>
</md-toolbar>
```

__styles.css__

```css
@import "~@angular/material/prebuilt-themes/deeppurple-amber.css";
@import "https://fonts.googleapis.com/css?family=Roboto:400,300";

html,
body {
  display: flex;
  flex-direction: column;
  font-family: Roboto, Arial, sans-serif;
  margin: 0;
  height: 100%;
}
```

## Branch step2 - Prepare to beta.12

`npm install -g angular-material-prefix-updater`

`mat-switcher --project ./tsconfig.json`

__app.module.ts__

`import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';`

providers:

`{provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}`

## Branch step3 - More components, separate module

__custom-material.module.ts__

```javascript
import { NgModule } from '@angular/core';

import {
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatSnackBarModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatExpansionModule
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatSnackBarModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatExpansionModule
    ],
})
export class CustomMaterialModule { }
```

`npm install --save hammerjs`

__styles.css__

`@import "https://fonts.googleapis.com/css?family=Material+Icons";`

__app.component.ts__

`templateUrl: './app.component.html'`

__app.component.html__

```html
<mat-toolbar color="primary">
  <button mat-icon-button (click)="mainSideNav.toggle()">
    <mat-icon>menu</mat-icon>
  </button>
  <span>{{title}}</span>
</mat-toolbar>

<mat-sidenav-container>
  <mat-sidenav mode="side" opened #mainSideNav>

    <mat-nav-list>
      <a mat-list-item routerLink="/dashboard" routerLinkActive="active">
        <mat-icon>info</mat-icon>
        <span>Dashboard</span>
      </a>
      <a mat-list-item routerLink="/heroes" routerLinkActive="active">
        <mat-icon>info</mat-icon>
        <span>Heroes</span>
      </a>
    </mat-nav-list>

  </mat-sidenav>
  <div>

    <router-outlet></router-outlet>

  </div>
</mat-sidenav-container>
```

__assets/img/hero.png__

__app.module.ts__

```javascript
import { BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material.module';
import 'hammerjs';
```

imports:

```
CustomMaterialModule,
BrowserAnimationsModule
```

__dashboard.component.html__

```html
<mat-card *ngFor="let hero of heroes">
  <mat-card-header>
    <mat-icon mat-card-avatar>flash_on</mat-icon>
    <mat-card-title>{{hero.name}}</mat-card-title>
    <mat-card-subtitle>#{{hero.id}}</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="assets/img/hero.png">
  <mat-card-content>
    <p>
      I am NOT Groot!
    </p>
  </mat-card-content>
  <mat-card-actions>
    <button md-raised-button color="accent" (click)="gotoDetail(hero)">View</button>    
  </mat-card-actions>
</mat-card>
```

__hero-search.component.html__

```html
<mat-form-field>
  <input matInput placeholder="Hero search" #searchBox (keyup)="search(searchBox.value)">
</mat-form-field>

<mat-nav-list>
  <a mat-list-item *ngFor="let hero of heroes | async" (click)="gotoDetail(hero)">{{hero.name}}</a>
</mat-nav-list>
```


## Branch step4 - Flex layout and snackbar

`npm install --save @angular/flex-layout`

__app.module.ts__

`import { FlexLayoutModule } from '@angular/flex-layout';`

imports:
`FlexLayoutModule`

__dashboard.component.html__

```html
<div fxLayout="row" fxLayout.xs="column" fxLayoutGap="16px">

  <mat-card ... fxFlex="25">

</div>
```

__app.component.css__

```css
:host {
  display: flex;
  flex: 1;
}

md-sidenav {
  width: 200px;
}

.content {
    padding: 16px;
}
```

__app.component.html__

```html
<div fxLayout="column" fxFlex>

<md-sidenav-container fxFlex>

    <div class="content">

      <router-outlet></router-outlet>

    </div>

</div>
```

__hero-detail.component.ts__

```javascript
import { MatSnackBar } from '@angular/material';

public snackBar: MatSnackBar

let snackBarRef = this.snackBar.open('Hero saved!', 'Back to list', {
    duration: 3000
});

snackBarRef.onAction().subscribe(() => {
    this.goBack(hero);
});
```


## Branch step5 - Theming

__app.component.html__

```html
<div fxLayout="column" fxFlex [class]="activeTheme">

...

<span fxFlex></span>

<button md-icon-button [mdMenuTriggerFor]="themeMenu">
  <md-icon>more_vert</md-icon>
</button>

...

<md-menu #themeMenu x-position="before">
  <button md-menu-item (click)="activeTheme = ''">Regular Hero</button>
  <button md-menu-item (click)="activeTheme = 'darkside-hero-theme'">Darkside Hero</button>
  <button md-menu-item (click)="activeTheme = 'baby-hero-theme'">Baby Hero</button>
</md-menu>
```

__app.component.ts__

`activeTheme = ''`

__hero-theme.scss__

```scss
@import '~@angular/material/_theming';
@include mat-core();

//http://mcg.mbitson.com/

$mat-hero-brown: (
  50: #795548,
  100: #795548,
  200: #795548,
  300: #795548,
  400: #795548,
  500: #795548,
  600: #795548,
  700: #795548,
  800: #795548,
  900: #795548,
  A100: #795548,
  A200: #795548,
  A400: #795548,
  A700: #795548,
  contrast: (
    50: white,
    100: white,
    200: white,
    300: white,
    400: white,
    500: white,
    600: white,
    700: white,
    800: white,
    900: white,
    A100: white,
    A200: white,
    A400: white,
    A700: white,
  )
);

$mat-hero-green: (
  50: #4CAF50,
  100: #4CAF50,
  200: #4CAF50,
  300: #4CAF50,
  400: #4CAF50,
  500: #4CAF50,
  600: #4CAF50,
  700: #4CAF50,
  800: #4CAF50,
  900: #4CAF50,
  A100: #4CAF50,
  A200: #4CAF50,
  A400: #4CAF50,
  A700: #4CAF50,
  contrast: (
    50: white,
    100: white,
    200: white,
    300: white,
    400: white,
    500: white,
    600: white,
    700: white,
    800: white,
    900: white,
    A100: white,
    A200: white,
    A400: white,
    A700: white,
  )
);

$mat-hero-red: (
  50: #E64A19,
  100: #E64A19,
  200: #E64A19,
  300: #E64A19,
  400: #E64A19,
  500: #E64A19,
  600: #E64A19,
  700: #E64A19,
  800: #E64A19,
  900: #E64A19,
  A100: #E64A19,
  A200: #E64A19,
  A400: #E64A19,
  A700: #E64A19,
  contrast: (
    50: white,
    100: white,
    200: white,
    300: white,
    400: white,
    500: white,
    600: white,
    700: white,
    800: white,
    900: white,
    A100: white,
    A200: white,
    A400: white,
    A700: white,
  )
);

$hero-primary: mat-palette($mat-hero-brown);
$hero-accent : mat-palette($mat-hero-green);
$hero-warn : mat-palette($mat-hero-red);

$hero-theme: mat-light-theme($hero-primary, $hero-accent, $hero-warn);

@include angular-material-theme($hero-theme);

.darkside-hero-theme {
    $dark-primary: mat-palette($mat-blue);
    $dark-accent: mat-palette($mat-purple);
    $dark-accent: mat-palette($mat-orange);

    $dark-theme: mat-dark-theme($dark-primary, $dark-accent, $dark-accent);

    @include angular-material-theme($dark-theme);
}

.baby-hero-theme {
    $dark-primary: mat-palette($mat-light-blue);
    $dark-accent: mat-palette($mat-yellow);
    $dark-warn: mat-palette($mat-red);

    $dark-theme: mat-light-theme($dark-primary, $dark-accent, $dark-accent);

    @include angular-material-theme($dark-theme);
}
```

__styles.css__

~~@import "~@angular/material/prebuilt-themes/deeppurple-amber.css";~~

__.angular-cli.json__

`hero-theme.scss`

## Branch step6 - Material table and CDK

__heroes.component.html__

```html
<mat-table #table [dataSource]="dataSource">

  <ng-container matColumnDef="heroId">
    <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>
    <mat-cell *matCellDef="let row"> {{row.id}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="heroName">
    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
    <mat-cell *matCellDef="let row"> {{row.name}} </mat-cell>
  </ng-container>

  <ng-container matColumnDef="heroActions">
    <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>
    <mat-cell *matCellDef="let row">
      <button mat-button color="accent" (click)="deleteHero(row, $event)">Delete</button>
    </mat-cell>
  </ng-container>

  <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
  <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>

</mat-table>

<mat-paginator [length]="100" [pageSize]="10" [pageSizeOptions]="[5, 10, 25, 100]">
</mat-paginator>
```

### CDK

The <cdk-table> is an unopinionated, customizable data-table with a fully-templated API, dynamic columns, and an accessible DOM structure. This component acts as the core. You can build your own customized data-table experience.

The table provides a foundation. Based on this, you can build other features, such as sorting and pagination. Developers have full control over the interaction patterns associated with the table.

__heroes.component.css__

```css
cdk-row,
cdk-header-row {
  display: flex;
  border-bottom: 1px solid #ccc;
  align-items: center;
  height: 32px;
  padding: 0 8px;
}

cdk-cell,
cdk-header-cell {
  flex: 1;
}
```

__app.module.ts__

`import {CdkTableModule} from '@angular/cdk/table';`

imports:

`CdkTableModule`
