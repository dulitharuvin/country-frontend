import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContinentItem } from 'src/app/model/continent-item.model';
import { ContinentService } from 'src/app/service/continent.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  constructor(
    private continentService: ContinentService,
    private router: Router
  ) {
    this.router.navigate([], {
      queryParams: {
        continentId: null,
        query: null,
      },
      queryParamsHandling: 'merge'
    })
    this.getContinentList();
  }

  continentList: ContinentItem[] = [];
  selectedContinentId?: number;
  query?: string;

  ngOnInit(): void {
  }

  sumbitCountrySearch(): void {
    var searchParams = {
      continentId: this.selectedContinentId,
      query: this.query,
    };
    this.router.navigate([], { queryParams: searchParams });
  }

  private getContinentList(): void {
    this.continentService.getContinentList().subscribe({
      next: (data: ContinentItem[]) => {
        this.continentList.push(...data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
