import { Component, OnInit } from '@angular/core';
import {MapService} from '../share/map.service';
import {EventService} from '../share/event.service';

@Component({
  selector: 'app-history-panel',
  templateUrl: './history-panel.component.html',
  styleUrls: ['./history-panel.component.css']
})
export class HistoryPanelComponent implements OnInit {
  openHistory = false;
  history = [];
  constructor(private mapService: MapService, private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvent().subscribe(
      (event) => {
        // console.log(event);
        // console.log(event.isChecked);
        // console.log(event.data);
        if (event.isChecked) {
          this.history.push(event.data);
        } else {
          this.history = this.history.filter((h) => h.viewValue === event.data.viewValue);
        }
      });
  }

}
