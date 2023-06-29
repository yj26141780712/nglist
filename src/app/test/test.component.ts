import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';

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
    this.router.navigate(['tabs/test/test1'])
  }

  onClick2() {
    this.router.navigate(['tabs/test/test2'])
  }

  onClick3(){
    this.router.navigate(['home'])
  }

  async onActionSheet() {
    const result = await ActionSheet.showActions({
      title: 'Photo Options',
      message: 'Select an option to perform',
      options: [
        {
          title: 'Upload',
        },
        {
          title: 'Share',
        },
        {
          title: 'Remove',
          style: ActionSheetButtonStyle.Destructive,
        },
      ],
    });
  
    console.log('Action Sheet result:', result);
  }
}
