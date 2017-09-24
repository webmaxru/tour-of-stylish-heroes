import { NgModule } from '@angular/core';

import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatButtonModule, MatInputModule, MatSelectModule, MatSnackBarModule } from '@angular/material';

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
        MatSnackBarModule
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
        MatSnackBarModule
    ],
})
export class CustomMaterialModule { }