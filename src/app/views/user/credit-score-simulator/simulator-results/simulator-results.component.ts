import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-simulator-results',
  templateUrl: './simulator-results.component.html',
  styleUrls: ['./simulator-results.component.css'],
})
export class SimulatorResultsComponent implements OnInit {

  @Input() formControlEmail: FormControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

}
