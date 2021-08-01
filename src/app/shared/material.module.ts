import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatSnackBarModule,
    ClipboardModule,
    MatAutocompleteModule,
  ],
  exports: [
    MatMenuModule,
    MatSnackBarModule,
    ClipboardModule,
    MatAutocompleteModule,
  ],
})
export class MaterialModule {}
