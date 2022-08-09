import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectItem } from './select.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {

  @Input() controlForm: FormControl = new FormControl();
  @Input() label: string = '';
  @Input() items: SelectItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
