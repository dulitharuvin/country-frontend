import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';
import { ContinentComponent } from './components/continent/continent.component';
import { CountryListComponent } from './components/country/country-list/country-list.component';
import { CountryEditItemComponent } from './components/country/country-edit-item/country-edit-item.component';
import { CountryDetailViewComponent } from './components/country/country-detail-view/country-detail-view.component';
import { ContinentEditItemComponent } from './components/continent/continent-edit-item/continent-edit-item.component';
import { ContinentListComponent } from './components/continent/continent-list/continent-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    ContinentComponent,
    CountryListComponent,
    CountryEditItemComponent,
    CountryDetailViewComponent,
    ContinentEditItemComponent,
    ContinentListComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
