import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hike } from '../shared/hike';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
  })

export class HikeService {
    url = '../assets/api/hikes.json';
    constructor(private http: HttpClient) {
    }
    getHikesFromApi(): Observable<Hike[]> {
        return this.http.get<Hike[]>(this.url).pipe(tap(val => console.log(val)));
    }
}
