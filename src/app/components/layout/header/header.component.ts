import { Component, OnInit } from '@angular/core';
import { fromEvent, map, startWith, distinctUntilChanged, shareReplay } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public readonly windowScroll$ = fromEvent(window, 'scroll').pipe(
    map(_ => window.scrollY),
    startWith(0),
    distinctUntilChanged(),
    shareReplay(1)
  );

  constructor() { }

  ngOnInit(): void {
    this.windowScroll$.subscribe({
      next: (s) => {
        console.log(s)
      }
    })
  }

}
