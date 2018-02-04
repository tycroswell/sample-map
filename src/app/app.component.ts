import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


declare var Cesium: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // @ViewChild('cesiumContainer')
  // private cesiumContainer: ElementRef;
  // public events = [];
  // title = 'app';
  // points = [];
  // panelOpenState: boolean;
  // opened: boolean;
  // viewer: any;

  ngOnInit(): void {
    // this.viewer = new Cesium.Viewer(this.cesiumContainer.nativeElement);
    // // console.log("Running Points");
    // this.generateRandomPoints({
    //   'lat': 24.23,
    //   'lng': 23.12
    // }, 9000000, 700000);
    // console.log("Ran Points", this.points);
  }


  // generateRandomPoints(center, radius, count): void {
  //   const points = this.viewer.scene.primitives.add(new Cesium.PointPrimitiveCollection());
  //   for (let i = 0; i < count; i++) {
  //     const point = this.generateRandomPoint(center, radius);
  //     points.add({
  //       position: Cesium.Cartesian3.fromDegrees(point.lng, point.lat),
  //       color: Cesium.Color.CYAN,
  //       pixelSize: 1
  //     });
  //   }
  // }
  //
  // generateRandomPoint(center, radius): any{
  //   var x0 = center.lng;
  //   var y0 = center.lat;
  //   // Convert Radius from meters to degrees.
  //   var rd = radius / 111300;
  //
  //   var u = Math.random();
  //   var v = Math.random();
  //
  //   var w = rd * Math.sqrt(u);
  //   var t = 2 * Math.PI * v;
  //   var x = w * Math.cos(t);
  //   var y = w * Math.sin(t);
  //
  //   var xp = x / Math.cos(y0);
  //
  //   // Resulting point.
  //   return {
  //     'lat': y + y0,
  //     'lng': xp + x0
  //   };
  // }

}
