import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MapService} from '../share/map.service';

declare var Cesium: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  @ViewChild('cesiumContainer')
  private cesiumContainer: ElementRef;
  viewer: any;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    const config = {
      sceneMode : Cesium.SceneMode.SCENE2D,
      imageryProvider : Cesium.createOpenStreetMapImageryProvider(),
      mapProjection : new Cesium.WebMercatorProjection()
    };
    this.viewer = new Cesium.CesiumWidget(this.cesiumContainer.nativeElement, config);
    // this.viewer = new Cesium.Viewer(this.cesiumContainer.nativeElement, config);
  }

}
