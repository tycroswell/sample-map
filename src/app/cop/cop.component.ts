
import {Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';


export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  templateUrl: './cop.component.html',
  styleUrls: ['./cop.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CopComponent implements OnInit {

  public events = [];
  title = 'app';
  points = [];
  panelOpenState: boolean;
  opened = false;

  sidenavendOpened = false;




  @HostListener('document:click', ['$event'])
  onDocument(event) {
    if (event.path[0].nodeName.toLowerCase() === 'canvas') {
      this.opened = false;
    }
  }


  constructor(  private route: ActivatedRoute ) {

  }

  ngOnInit() {}

}
