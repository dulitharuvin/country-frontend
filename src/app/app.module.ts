import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { ContinentComponent } from './continent/continent.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CountryEditItemComponent } from './country/country-edit-item/country-edit-item.component';
import { CountryDetailViewComponent } from './country/country-detail-view/country-detail-view.component';
import { ContinentEditItemComponent } from './continent/continent-edit-item/continent-edit-item.component';
import { ContinentListComponent } from './continent/continent-list/continent-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    ContinentComponent,
    CountryListComponent,
    CountryEditItemComponent,
    CountryDetailViewComponent,
    ContinentEditItemComponent,
    ContinentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
