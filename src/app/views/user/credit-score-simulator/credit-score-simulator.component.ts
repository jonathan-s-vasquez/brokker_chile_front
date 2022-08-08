import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit-score-simulator',
  templateUrl: './credit-score-simulator.component.html',
  styleUrls: ['./credit-score-simulator.component.css'],
})
export class CreditScoreSimulatorComponent implements OnInit {

  slidersQuantity: number = 6;
  image: string = 'assets/images/credit-calculator.jpg';
  steps: string[] = [
    'Tipo de credito',
    'Antecedentes personales',
    'Antecedentes laborales',
    'Antecedentes economicos',
    'Resultados',
  ];

  formControl = new FormGroup({
    currentStep: new FormControl(1),
    creditType: new FormControl('', [Validators.required]),
    personnalInformation: new FormGroup({
      name: new FormControl('', [Validators.required]),
      rut: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      maritalStatus: new FormControl('', [Validators.required]),
      job: new FormControl('', [Validators.required]),
    }),
    workInformation: new FormGroup({
      contractPeriod: new FormControl('', [Validators.required]),
      laborOldQuantity: new FormControl('', [Validators.required]),
      laborOldSufix: new FormControl('', [Validators.required]),
      wageIncome: new FormControl('', [Validators.required]),
    }),
    economicBackground: new FormGroup({
      realStateHeritage: new FormControl('', [Validators.required]),
      furnitureHeritage: new FormControl('', [Validators.required]),
      shorTermsDebts: new FormControl('', [Validators.required]),
      longTermsDebts: new FormControl('', [Validators.required]),
      recentDeliquency: new FormControl('', [Validators.required]),
      wageIncomeComplement: new FormControl('', [Validators.required]),
    }),
    email: new FormControl('', [Validators.required]),
  });

  get currentStep(): number {
    return this.formControl.controls.currentStep.value || 1;
  }

  get shouldActivateNextButton(): boolean {
    if (this.currentStep === 2) {
      return this.formControl.controls.personnalInformation.valid;
    }
    if (this.currentStep === 3) {
      return this.formControl.controls.workInformation.valid;
    }
    if (this.currentStep === 4) {
      return this.formControl.controls.economicBackground.valid;
    }
    if (this.currentStep === 5) {
      return this.formControl.controls.email.valid;
    }
    return false;
  }

  constructor() { }

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe({
      next: (a) => {
        console.log(a);
      },
    });
  }

  selectCreditType(type: 'Consumo' | 'Hipotecario') {
    this.formControl.controls.creditType.setValue(type);
    this.formControl.controls.currentStep.setValue(2);
  }

  returnOneStep() {
    this.formControl.controls.currentStep.setValue(this.currentStep - 1);
  }

  forwardOneStep() {
    this.formControl.controls.currentStep.setValue(this.currentStep + 1);
  }

  asFormGroup(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }

  asFormControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }
}
