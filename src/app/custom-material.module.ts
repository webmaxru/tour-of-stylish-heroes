import { NgModule } from '@angular/core';

import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatButtonModule, MatInputModule, MatSelectModule, MatSnackBarModule, MatMenuModule } from '@angular/material';

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
        MatMenuModule
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
        MatMenuModule
    ],
})
export class CustomMaterialModule { }