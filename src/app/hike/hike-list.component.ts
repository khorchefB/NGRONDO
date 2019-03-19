import { Component, OnInit } from '@angular/core';
import { HikeService } from './hike.service';
import { Hike } from '../shared/hike';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-hike-list',
    templateUrl: 'hike-list.component.html'

})

export class HikeListComponent implements OnInit {
    public hikes: Hike[];
    searchTerm: string;

    constructor(private _hikeService: HikeService) {}

    ngOnInit() {
        this._hikeService.getHikesFromApi().subscribe(res => this.hikes = res, error => console.log('oops', error));
    }

    addToMyTodoHike(hikeToAdd: Hike) {
        console.log('rondo ' + hikeToAdd.name + ' ajoutée' );
    }
}

