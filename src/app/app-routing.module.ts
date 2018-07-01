
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { BlankContainerComponent } from './container/blank-container/blank-container.component';
import { DashboardContainerComponent } from './container/dashboard-container/dashboard-container.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'test/home',
    pathMatch: 'full'

  },


  {
    path: 'test',
    component: DashboardContainerComponent,

    children: [
      {
        path: "",
        loadChildren: "./onepage/test/test.module#TestModule"
      }
    ]

  }
];

const rootRouting: ModuleWithProviders = RouterModule.forRoot(routes,

  { preloadingStrategy: PreloadAllModules, useHash: false, enableTracing: true });


@NgModule({
  imports: [rootRouting,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
