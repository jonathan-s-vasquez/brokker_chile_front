import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-multiple',
  templateUrl: './money-multiple.component.html',
  styleUrls: ['./money-multiple.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoneyMultipleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
