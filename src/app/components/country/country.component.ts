import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ContinentItem } from 'src/app/model/continent-item.model';
import { ContinentService } from 'src/app/service/continent.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  continentList: ContinentItem[] = [];
  selectedContinentId?: number;
  query?: string;
  showCountryHeader: boolean = true;

  constructor(
    private continentService: ContinentService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.navigate([], {
      queryParams: {
        continentId: null,
        query: null,
      },
      queryParamsHandling: 'merge',
    });
    this.getContinentList();
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url.indexOf('/country/list') != -1)
          this.showCountryHeader = true;
      }
    });
  }

  ngOnInit(): void {}

  sumbitCountrySearch(): void {
    var searchParams = {
      continentId: this.selectedContinentId,
      query: this.query,
    };
    this.router.navigate([], { queryParams: searchParams });
  }

  navigateToAddNewCountry(): void {
    this.showCountryHeader = false;
    this.router.navigate(['edit-item'], { relativeTo: this.activatedRoute });
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
