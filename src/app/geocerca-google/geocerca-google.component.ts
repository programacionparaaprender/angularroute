import { Component, OnInit } from '@angular/core';

//import { LatLng, LatLngLiteral, PolyMouseEvent } from '../services/google-maps-types';
import { AgmCoreModule, LatLng, LatLngLiteral, PolyMouseEvent } from '@agm/core';



@Component({
  selector: 'app-geocerca-google',
  templateUrl: './geocerca-google.component.html',
  styleUrls: ['./geocerca-google.component.css']
})


export class GeocercaGoogleComponent implements OnInit {
  title = 'Ejemplo simpre de usar Google maps en angular';
  lat = 51.678418;
  lng = 7.809007;
  clickeable = true;
  draggable = true;
  map = null;
  tituloMarker = 'Titulo marker';
  markers = []
  color = "black";
  visible = true;
  paths: LatLngLiteral[] = []
  /* paths: Array<LatLngLiteral> = [
    {lat:51.69612661762577,lng:6.756516564459343},
    {lat:51.9710789023937,lng:7.025681603521843},
    {lat:52.00490726563561,lng:7.811204064459343},
    {lat:51.87961464450517,lng:8.228684533209343},
    {lat:51.699531328872304,lng:8.096848595709343},
    {lat:51.52556429514715,lng:7.448655236334343}] */
  //paths: LatLngLiteral[] = []
  /* paths: Array<LatLngLiteral> = [
    *     { lat: 0,  lng: 10 },
    *     { lat: 0,  lng: 20 },
    *     { lat: 10, lng: 20 },
    *     { lat: 10, lng: 10 },
    *     { lat: 0,  lng: 10 }
    *   ] */
  constructor() { }
  
  ngOnInit(): void {
  }
  limpiar(): void{
    this.markers = [];
    this.paths = [];
  }
  //google.maps.MouseEvent
  mapClick(event) {
    //console.log(JSON.stringify(event.coords));
    let position = {
      lat: event.coords.lat,
      lng: event.coords.lng
    }
    this.markers.push(position);

    this.paths = Object.values(this.markers);
    /* this.paths.push({
      lat: event.coords.lat,
      lng: event.coords.lng
    }); */
    console.log(this.paths);
    
  }
  
}
