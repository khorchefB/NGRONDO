import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HikeModule } from './hike/hike.module';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HikeListComponent } from './hike/hike-list.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HikeDetailsComponent } from './hike/hike-details.component';
import { ContactUsComponent } from './contact/contact-us.component';
import { ContactModule } from './contact/contact.module';
import { MapModule } from './map/map.module';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HikeModule,
    HttpClientModule,
    HomeModule,
    ContactModule,
    MapModule,
    RouterModule.forRoot([{path: 'home', component: HomeComponent},
                          {path: 'hikes/:id', component: HikeDetailsComponent},
                          {path: 'contact', component: ContactUsComponent },
                          {path: 'hikes', component: HikeListComponent},
                          {path: 'map', component: MapComponent},
                          {path: '', redirectTo: 'home', pathMatch: 'full'},
                          {path: '**', component: PageNotFoundComponent}
                        ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
