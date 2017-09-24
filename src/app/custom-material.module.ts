import { NgModule } from '@angular/core';

import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatButtonModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule
    ],
})
export class CustomMaterialModule { }