import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TestRoutingModule } from './test-routing.module';



@NgModule({
  declarations: [
    TestComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestRoutingModule
  ]
})
export class TestModule { }
