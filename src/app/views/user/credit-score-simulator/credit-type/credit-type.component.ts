import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-credit-type',
  templateUrl: './credit-type.component.html',
  styleUrls: ['./credit-type.component.css']
})
export class CreditTypeComponent implements OnInit {

  @Output('selectCreditType') selectCreditType = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


}
