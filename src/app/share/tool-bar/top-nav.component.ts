import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {S2aService} from '../service/s2a.service';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(private s2aService: S2aService) {
  }

  ngOnInit() {

  }

}
