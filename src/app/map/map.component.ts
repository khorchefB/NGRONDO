import { Component } from '@angular/core';
import { MapService } from './map.service';

@Component({
    selector: 'app-hike-map',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.css']
})

export class MapComponent {
    lat: number = 48.30;
    lng: number = -1.43;
    markerWasDropped: boolean;

    droppedLat: number;
    droppedLng: number;
    startingPoint: string = 'La ville Ollivier, 35140 Mézière-sur-Couesnon, France';

    constructor( private _mapservice: MapService) {}

    markerDragEnd(event: any) {
        console.log(this.lat);
        this.markerWasDropped = true;
        this.droppedLat = event.coords.lat.toFixed(5);
        this.droppedLng = event.coords.lng.toFixed(5);
    }

    geoCode() {
        this._mapservice.getLatLng(this.startingPoint).subscribe((data: any) => console.log(data), (err: any) => console.error(err));
    }
}
