import {
  Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log(`default page constructor called...`);
  }
  @Input() myValue = "sagar";
  counter;
  num: number = 1;

  ngOnInit(): void {
    console.log(`default page ngOnInit called...`);
    // this.counter = setInterval(() => {
    //   this.num = this.num + 1;
    //   console.log(this.num);
    // }, 1000)
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(`default page ngOnChanges called...`);
    console.log("changes:", changes);
  }
  ngDoCheck() {
    console.log(`default page ngDoCheck called...`);
  }
  ngAfterContentInit() {
    console.log(`default page ngAfterContentInit called...`);
  }
  ngAfterContentChecked() {
    console.log(`default page ngAfterContentChecked called...`);
  }
  ngAfterViewInit() {
    console.log(`default page ngAfterViewInit called...`);
  }
  ngAfterViewChecked() {
    console.log(`default page ngAfterViewChecked called...`);
  }
  ngOnDestroy() {
    console.log(`default page ngOnDestroy called...`);
    clearInterval(this.counter);
  }
}
