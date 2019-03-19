import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { google } from '@agm/core/services/google-maps-types';

@Injectable()

export class MapService {
    geocoder = new google.maps.Geocoder;

    constructor() {
        this.geocoder = new google.maps.Geocoder();
    }

    getLatLng(address: string) {
        console.log('test');
        return Observable.create((observer: any) => {
            this.geocoder.geocode({'address': address}, function(result: any, status: any) {
                if (status === google.maps.GeocoderStatus.OK) {
                    console.log(result[0]);
                    observer.next(result[0]);
                    observer.complete();
                } else {
                    console.log(result[0]);
                    observer.next();
                    observer.complete();
                }
            });
        });
    }
}
