import { ModuleWithProviders, NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// import { MdcIconModule } from '@angular-mdc/web';
// import { MaterialModule } from './../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


import { HomeComponent,TestComponent } from './index';

const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    redirectTo: 'test',
  },
  {
    path: '',
    pathMatch: 'full',
    component: TestComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  }

]);



@NgModule({
  imports: [
    CommonModule,
    // MaterialModule,
    FormsModule,
    FlexLayoutModule,
    // MdcIconModule,
    routes
  ],
  declarations: [
    HomeComponent,
    TestComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class TestModule { }