import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CityComponent } from './city/city.component';
import { AgmCoreModule } from '@agm/core'

@NgModule({
  declarations: [
    AppComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAJwlLV6y_fOL5CtSWhUYvnSlwdpJPe7m8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
