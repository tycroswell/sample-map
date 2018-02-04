import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatSidenavModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule

} from '@angular/material';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './not.found.component';
import {TopNavComponent} from './share/tool-bar/top-nav.component';
import {S2aService} from './share/service/s2a.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [S2aService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
