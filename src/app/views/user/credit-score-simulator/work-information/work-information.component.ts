import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-work-information',
  templateUrl: './work-information.component.html',
  styleUrls: ['./work-information.component.css'],
})
export class WorkInformationComponent implements OnInit {

  @Input() controlForm: FormGroup = new FormGroup({
    contractPeriod: new FormControl('', [Validators.required]),
    wageIncome: new FormControl('', [Validators.required]),
    laborOldQuantity: new FormControl('', [Validators.required]),
    laborOldSufix: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onRutInputKeyDown(event: Event) {
    const currentRut = [...(this.controlForm.controls.rut.value || '')];
    if (currentRut.length >= 12) {
      return false;
    }
    const regExpr = /^[0-9]|[k]+$/i;
    const keyCode = (event as any).charCode;
    const character = String.fromCharCode(keyCode);
    return regExpr.test(`${character}`);
  }
  onRutInputKeyUp() {
    let rut = [...(this.controlForm.controls.rut.value || '')];
    rut = rut.filter((x) => x !== '.' && x !== '-');
    if (rut?.length <= 1) {
      return;
    }
    if (rut?.length >= 5) {
      rut.splice(rut.length - 4, 0, '.');
    }
    if (rut?.length >= 8) {
      rut.splice(rut.length - 8, 0, '.');
    }
    rut.splice(rut.length - 1, 0, '-');
    this.controlForm.controls.rut.setValue(rut.join(''));
  }

  asFormControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }
}
