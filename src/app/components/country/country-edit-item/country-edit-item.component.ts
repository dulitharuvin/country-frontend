import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  of,
  OperatorFunction,
  switchMap,
} from 'rxjs';
import { ContinentItem } from 'src/app/model/continent-item.model';
import { CountryItem } from 'src/app/model/country-item.model';
import { ContinentService } from 'src/app/service/continent.service';
import { CountryService } from 'src/app/service/country.service';
import { ConfirmationDialogService } from '../../confirmation-dialog/confirmation-dialog.service';

import { ContinentEditItemComponent } from '../../continent/continent-edit-item/continent-edit-item.component';

@Component({
  selector: 'app-country-edit-item',
  templateUrl: './country-edit-item.component.html',
  styleUrls: ['./country-edit-item.component.scss'],
})
export class CountryEditItemComponent implements OnInit {
  continentList: ContinentItem[] = [];
  selectedContient?: ContinentItem;

  countryForm = this.formBuilder.group({
    name: [
      '',
      [Validators.required, Validators.maxLength(200), Validators.minLength(3)],
    ],
    code: [
      '',
      [Validators.required, Validators.maxLength(2), Validators.minLength(2)],
    ],
    continent: [null],
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private confirmationDialogService: ConfirmationDialogService,
    private continentService: ContinentService,
    private countryService: CountryService
  ) {
    this.getContinentList();
  }

  ngOnInit(): void {}

  async saveCountry() {
    const country = new CountryItem();
    country.name = this.countryForm.get('name')?.value;
    country.code = this.countryForm.get('code')?.value;
    const continentId: number =
      this.countryForm.get('continent')?.value?.continentId;
    if (continentId) {
      this.saveCountryCall(continentId, country);
    } else {
      this.openContinetentNotSelectedDialog().then((newContinent) =>{
        if(newContinent){
          this.continentList.push(newContinent);
          this.countryForm.patchValue({continent : newContinent});
        }
      });
    }
  }

  cancelSave() {
    this.router.navigate(['../list'], { relativeTo: this.activatedRoute });
  }

  formatter = (continent: ContinentItem) => continent.name;

  search: OperatorFunction<string, ContinentItem[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter((term) => term.trim().length >= 2),
      map((term) =>
        this.continentList
          .filter((cont) => new RegExp(term, 'mi').test(cont.name))
          .slice(0, 10)
      )
    );

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

  private async openContinetentNotSelectedDialog() {
    let newContinentPromise = new Promise<ContinentItem>((resolve, reject) => {
      this.confirmationDialogService
        .confirm('Please select a valid continent', 'Click Ok to create a new continent for the country or cancel to select an existing one')
        .then((confirmed) => {
          if (confirmed) {
             resolve(this.openCreateContinentDialog());
          } else {
            reject(false)
          }
        })
        .catch(() => {
          reject(false);
        });
    });
    return await newContinentPromise;
  }

  private async openCreateContinentDialog(): Promise<ContinentItem> {
    const modalRef = this.modalService.open(ContinentEditItemComponent).result;
    return await modalRef;
  }

  private saveCountryCall(continentId: number, country: CountryItem) {
    this.countryService.saveCountry(country, continentId).subscribe({
      next: (data: CountryItem) => {
        this.router.navigate(['../list'], {
          relativeTo: this.activatedRoute,
        });
      },
    });
  }
}
