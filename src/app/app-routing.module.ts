import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// import { ComposeMessageComponent }  from './compose-message.component';
 import { PageNotFoundComponent }    from './not.found.component';
//
// import { CanDeactivateGuard }       from './can-deactivate-guard.service';
// import { AuthGuard }                from './auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
  {
    path: 'cop',
    loadChildren: 'app/cop/cop.module#CopModule'
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  { path: '',   redirectTo: 'cop', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
