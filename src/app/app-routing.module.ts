import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentEditItemComponent } from './continent/continent-edit-item/continent-edit-item.component';
import { ContinentListComponent } from './continent/continent-list/continent-list.component';
import { ContinentComponent } from './continent/continent.component';
import { CountryDetailViewComponent } from './country/country-detail-view/country-detail-view.component';
import { CountryEditItemComponent } from './country/country-edit-item/country-edit-item.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  {
    path: 'country',
    component: CountryComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'list', component: CountryListComponent },
      { path: 'edit-item', component: CountryEditItemComponent },
      { path: 'detail-item', component: CountryDetailViewComponent },
      { path: '**', component: CountryComponent },
    ],
  },
  {
    path: 'continent',
    component: ContinentComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'list', component: ContinentListComponent },
      { path: 'edit-item', component: ContinentEditItemComponent },
      { path: '**', component: ContinentComponent },
    ],
  },
  { path: '', redirectTo: 'country', pathMatch: 'full' },
  { path: '**', component: CountryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
