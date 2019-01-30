import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckbox,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatExpansionModule,
  MatRadioModule,
  MatTabsModule,
  MatCardModule,
  MatTableModule,
  MatDialogModule,
  MatFooterCell,
  MatGridListModule,
  MatSelectModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDatepickerModule,
        MatNativeDateModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule,
        MatExpansionModule, MatRadioModule, MatIconModule, MatTabsModule, MatCardModule, MatTableModule,
    MatDialogModule, MatGridListModule, MatSelectModule, MatStepperModule, MatAutocompleteModule,
    MatChipsModule, MatCheckboxModule, MatMenuModule],

    exports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDatepickerModule
    , MatNativeDateModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule
    , MatExpansionModule, MatRadioModule, MatIconModule, MatIconModule, MatTabsModule, MatCardModule
    , MatTableModule, MatDialogModule, MatGridListModule, MatSelectModule, MatStepperModule,
    MatAutocompleteModule, MatChipsModule, MatCheckboxModule, MatMenuModule]
})
export class MaterialModule {}
