import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'src/app/components/inputs/select/select.interface';

@Component({
  selector: 'app-economic-background',
  templateUrl: './economic-background.component.html',
  styleUrls: ['./economic-background.component.css']
})
export class EconomicBackgroundComponent implements OnInit {

  @Input() controlForm: FormGroup = new FormGroup({
    realStateHeritage: new FormControl('', [Validators.required]),
    furnitureHeritage: new FormControl('', [Validators.required]),
    shorTermsDebts: new FormControl('', [Validators.required]),
    longTermsDebts: new FormControl('', [Validators.required]),
    recentDeliquency: new FormControl('', [Validators.required]),
    wageIncomeComplement: new FormControl('', [Validators.required]),
  });

  wageIncomeComplementList: SelectItem[] = [
    {
      text: 'Si',
      value: 'Si',
    },
    {
      text: 'No',
      value: 'No',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  asFormControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }

}
