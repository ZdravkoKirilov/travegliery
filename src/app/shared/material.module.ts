import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatMenuModule, MatSnackBarModule, ClipboardModule],
  exports: [MatMenuModule, MatSnackBarModule, ClipboardModule],
})
export class MaterialModule {}
