import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// Shared module is an export modules with common to all app modules.

@NgModule({
  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ]
})
export class SharedModule { }
