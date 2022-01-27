import { Component, OnInit } from '@angular/core';
import { CountryItem } from 'src/app/model/country.model';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countryItemList: CountryItem[] = [];
  countryItemListCount: number = 0;

  constructor(private countryService : CountryService) { }

  ngOnInit(): void {
    this.countryItemList = [];
    this.getCountryList();
  }

  navigateToCountryDetail(country: CountryItem){

  }

  getCountryList(): void{
    this.countryService.getCountryList().subscribe((data : CountryItem[]) => {
        this.countryItemList.push(...data);
    },(error) =>{

    })
  }
}
