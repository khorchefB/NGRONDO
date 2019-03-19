import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HikeListComponent } from './hike-list.component';
import { HikeService } from './hike.service';
import { HikeDetailsComponent } from './hike-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HikeFilterPipe } from './hike-filter-pipe';
import { HikeSummaryComponent } from './hike-summary.component';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    exports: [HikeListComponent, HikeDetailsComponent],
    declarations: [HikeListComponent, HikeDetailsComponent, HikeFilterPipe, HikeSummaryComponent ],
    providers: [HikeService]
})

export class HikeModule {
}
