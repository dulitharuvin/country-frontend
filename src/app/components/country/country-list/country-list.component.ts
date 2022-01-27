import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountryItem } from 'src/app/model/country-item.model';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  countryItemList: CountryItem[] = [];
  countryItemListCount: number = 0;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data: Params) => {
      const continentId = data['continentId'];
      const query = data['query'];
      this.getCountryList(continentId, query);
    });
    this.countryItemList = [];
  }

  navigateToCountryDetail(country: CountryItem) {}

  getCountryList(continentId?: number, query?: string): void {
    this.countryItemList = [];
    this.countryItemListCount = 0;
    this.countryService.getCountryList(continentId, query).subscribe({
      next: (data: CountryItem[]) => {
        this.countryItemList.push(...data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
