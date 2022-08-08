import { Component, Input, OnInit } from '@angular/core';
import { delay, of, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-simulation-generated',
  templateUrl: './simulation-generated.component.html',
  styleUrls: ['./simulation-generated.component.css'],
})
export class SimulationGeneratedComponent implements OnInit {

  subject = new Subject<boolean>();

  @Input()
  set iAmVisible(status: boolean) {
    this._iAmVisible = status;
    if (this._iAmVisible) {
      this.subject.next(true);

      of({}).pipe(delay(3 * 1000)).subscribe({
        next: () => {
        },
      });
    }
    else {
      of({}).pipe(delay(1 * 1000)).subscribe({
        next: () => {
          this.subject.next(false);
        },
      });
    }
  }
  get iAmVisible(): boolean {
    return this._iAmVisible;
  }
  _iAmVisible = false;

  success: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.subject.pipe(
      switchMap((status) => {
        if (status) {
          return of(status).pipe(delay(5 * 1000));
        }
        return of(status).pipe(delay(1 * 1000));
      }),
    ).subscribe({
      next: (status) => {
        this.success = status;
      },
    });
  }

}
