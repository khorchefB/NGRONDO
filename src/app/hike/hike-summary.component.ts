import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hike } from '../shared/hike';

@Component({
    selector: 'hike-summary',
    templateUrl: 'hike-summary.component.html',
    styleUrls: ['hike-summary.component.css']
})

export class HikeSummaryComponent {
    @Input() hike: Hike;
    @Output() addHikeAsFavorite = new EventEmitter<Hike>();

    toggleAsTodoHike(isAdded: any) {
        console.log(isAdded);
        if(isAdded) {
            this.addHikeAsFavorite.emit(this.hike);
        }
    }
}
