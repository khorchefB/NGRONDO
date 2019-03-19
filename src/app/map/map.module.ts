import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { MapService } from './map.service';

@NgModule(({
    imports: [AgmCoreModule.forRoot({apiKey: 'AIzaSyCtHpPoFD0AI-v_QKT_DivBdhFb1EFm6nw'}), CommonModule],
    declarations: [MapComponent],
    exports: [],
    providers: [MapService]
}))

export class MapModule {

}
