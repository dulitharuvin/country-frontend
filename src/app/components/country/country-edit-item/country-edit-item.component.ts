import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContinentItem } from 'src/app/model/continent-item.model';
import { CountryItem } from 'src/app/model/country-item.model';
import { ContinentService } from 'src/app/service/continent.service';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-country-edit-item',
  templateUrl: './country-edit-item.component.html',
  styleUrls: ['./country-edit-item.component.scss'],
})
export class CountryEditItemComponent implements OnInit {
  continentList: ContinentItem[] = [];

  countryForm = this.formBuilder.group({
    name: [
      '',
      [Validators.required, Validators.maxLength(200), Validators.minLength(3)],
    ],
    code: [
      '',
      [Validators.required, Validators.maxLength(2), Validators.minLength(2)],
    ],
    continentId: ['', [Validators.required]],
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private continentService: ContinentService,
    private countryService: CountryService
  ) {
    this.getContinentList();
  }

  ngOnInit(): void {}

  saveCountry(): void {
    console.warn(this.countryForm.value);
    const country = new CountryItem();
    country.name = this.countryForm.get('name')?.value;
    country.code = this.countryForm.get('code')?.value;
    const continentId: number = this.countryForm.get('continentId')?.value;
    this.countryService.saveCountry(country, continentId).subscribe({
      next: (data: CountryItem) => {
        this.router.navigate(['../list'], { relativeTo: this.activatedRoute });
      },
    });
  }

  cancelSave(){
    this.router.navigate(['../list'], { relativeTo: this.activatedRoute });
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
