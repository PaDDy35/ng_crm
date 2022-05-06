import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}) export class AppComponent implements OnInit {
  ngOnInit(): void {
    // this.test2();
  };
  title = 'NguLardON';
}


  // test1() {
  //   var subject = new Subject();
  //   subject.next(1);
  //   subject.subscribe({
  //   next: (v: any) => console.log('observerA: ' + v)
  //   });
  //   subject.next(2);
  //   subject.subscribe({
  //   next: (v : any) => console.log('observerB: ' + v)
  //   });
  //   subject.next(3);
  // }

  // test2() {
  //   var subject = new BehaviorSubject(0); // 0 is the initial value
  //   subject.subscribe({
  //   next: (v: any) => console.log('observerA: ' + v)
  //   });
  //   subject.next(1);
  //   subject.next(2);
  //   subject.subscribe({
  //   next: (v: any) => console.log('observerB: ' + v)
  //   });
  //   subject.next(3);
  // }

  // test3() {
  //   var subject = new ReplaySubject(3); // beffer 3 values for new subscribers
  //   subject.subscribe({
  //     next: (v) => console.log('observableA:' + v)
  //   });
  //   subject.next(1);
  //   subject.next(2);
  //   subject.next(3);
  //   subject.next(4);
  //   subject.subscribe({
  //     next: (v) => console.log('observableB: ' + v)
  //   })
  //   subject.next(5);
  // }
