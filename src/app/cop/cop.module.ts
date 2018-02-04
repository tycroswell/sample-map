import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CopRoutingModule } from './cop-routing.module';
import {CopComponent} from './cop.component';
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule,
  MatSidenavModule, MatTabsModule, MatAutocompleteModule, MatToolbarModule, MatTooltipModule, MatDividerModule, MatListModule,
  MatSelectModule, MatCheckboxModule, MatChipsModule
} from '@angular/material';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { MapComponent } from './map/map.component';
import {MapService} from './share/map.service';
import { HistoryPanelComponent } from './history-panel/history-panel.component';
import {EventService} from './share/event.service';

@NgModule({
  imports: [
    CommonModule,
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
    MatTabsModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    CopRoutingModule
  ],
  declarations: [
    CopComponent,
    SearchFilterComponent,
    SidePanelComponent,
    MapComponent,
    HistoryPanelComponent
  ],
  providers: [ MapService, EventService ]
})
export class CopModule {}
