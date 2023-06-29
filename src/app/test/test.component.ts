import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  onClick1() {
    console.log('test1')
    this.router.navigate(['test/test1'])
  }

  onClick2() {
    this.router.navigate(['test/test2'])
  }

  onClick3(){
    this.router.navigate(['home'])
  }
}
