import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { fromEvent, map, startWith, distinctUntilChanged, shareReplay } from 'rxjs';
import { UserRouting } from 'src/app/views/user/user.rounting';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  routes = UserRouting.reverse();

  public readonly windowScroll$ = fromEvent(window, 'scroll').pipe(
    map(_ => window.scrollY),
    startWith(0),
    distinctUntilChanged(),
    shareReplay(1),
  );

  shouldChangeBackground: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.windowScroll$.subscribe({
      next: (s) => {
        if (s === 0) {
          this.shouldChangeBackground = false;
          return;
        }
        if (!this.shouldChangeBackground) {
          this.shouldChangeBackground = true;
        }
      },
    });
  }

  isActive(route: Route): boolean {
    const path = `/${route.path}`;
    const absolute = path === '/';
    const matcher = new RegExp(`^${path}${absolute ? '$' : ''}`)
    // eslint-disable-next-line no-restricted-globals
    return matcher.test(location.pathname);
  }
}
