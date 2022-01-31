import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContinentItem } from 'src/app/model/continent-item.model';
import { ContinentService } from 'src/app/service/continent.service';

@Component({
  selector: 'app-continent-edit-item',
  templateUrl: './continent-edit-item.component.html',
  styleUrls: ['./continent-edit-item.component.scss'],
})
export class ContinentEditItemComponent implements OnInit {
  continentForm = this.formBuilder.group({
    name: [
      '',
      [Validators.required, Validators.maxLength(200), Validators.minLength(3)],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private activeModal: NgbActiveModal,
    private continentService: ContinentService
  ) {}

  ngOnInit(): void {}

  public close() {
    this.activeModal.close(null);
  }

  public dismiss() {
    this.activeModal.dismiss(null);
  }

  public saveContinent() {
    const newContinent = new ContinentItem();
    newContinent.name = this.continentForm.get('name')?.value;
    this.continentService.saveContinent(newContinent).subscribe({
      next: (data: ContinentItem) => {
        this.activeModal.close(data);
      },
      error: (err) => {
        console.log(err);
        this.activeModal.close(null);
      },
    });
  }
}
