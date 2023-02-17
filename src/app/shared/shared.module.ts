import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { ImageWrapperComponent } from './image-wrapper/image-wrapper.component';


@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    ImageWrapperComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    InputComponent,
    ButtonComponent,
    ImageWrapperComponent
  ]
})
export class SharedModule { }
