import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {MapService} from '../share/map.service';
import {EventService} from '../share/event.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidePanelComponent implements OnInit {
  @Input() sidenav;
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  shipCharacteristics = [
    {value: '0', viewValue: 'Cargo'},
    {value: '1', viewValue: 'Tug Boat'},
    {value: '2', viewValue: 'Junk'}
  ];

  flags = [
    {value: '0', viewValue: 'Canada'},
    {value: '1', viewValue: 'United Kingdom'},
    {value: '2', viewValue: 'United States'}
  ];

  constructor(private mapService: MapService, private eventService: EventService) { }

  ngOnInit() {  }

  onCheckboxClicked(event: any, filterType: string): void {
    console.log(event);
    let found;
    if (filterType === 'flag') {
      found = this.flags.find((flag) => flag.value === event.source.value);
    } else  if (filterType === 'characteristics') {
      found = this.shipCharacteristics.find((flag) => flag.value === event.source.value);
    }
    // notify component of change
    this.eventService.sendEvent({data: found, isChecked: event.checked});

  }
}
