import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExtrasModule } from '../extras/extras.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ExtrasModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  
  exports: [
    FormsModule,
    ExtrasModule,
    BsDropdownModule,
    ToastrModule
  ]
})
export class SharedModule { }
