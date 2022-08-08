import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-plus',
  templateUrl: './home-plus.component.html',
  styleUrls: ['./home-plus.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePlusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
