import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankContainerComponent } from './blank-container/blank-container.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { RouterModule } from '@angular/router';
// import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// export const routes: ModuleWithProviders = RouterModule.forChild([
//   // {
//   //   path: '',
//   //   redirectTo: 'project-content',
//   //   pathMatch: 'full',
//   // },
//   {
//     path: '**',
//     component: DashboardContainerComponent
//   },


// ]);

@NgModule({
  imports: [
    CommonModule,
    // MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [BlankContainerComponent, DashboardContainerComponent],
  exports:[BlankContainerComponent, DashboardContainerComponent]
})
export class ContainerModule { }
