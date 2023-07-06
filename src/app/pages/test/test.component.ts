import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { Browser } from '@capacitor/browser';
import { Device } from '@capacitor/device';
import { Share } from '@capacitor/share';
import { Camera, CameraResultType } from '@capacitor/camera';

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
  
  async onBrower(){
    await Browser.open({ url: 'http://capacitorjs.com/',presentationStyle:'popover' });
  }

  async onDevice() {
    const info1 = await Device.getInfo();
    console.log(info1);
    const info2 = await Device.getBatteryInfo();
    console.log(info2);
  }

  async onShare() {
    // await Share.share({
    //   title: 'See cool stuff',
    //   text: 'Really awesome thing you need to see right meow',
    //   url: 'http://ionicframework.com/',
    //   dialogTitle: 'Share with buddies',
    // });
    
    // // Share text only
    // await Share.share({
    //   text: 'Really awesome thing you need to see right meow',
    // });
    
    // Share url only
    // await Share.share({
    //   url: 'http://ionicframework.com/',
    // });
    
    // Share local file using url parameter
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    await Share.share({
      url: photo.path,
    });
    
    // // Share multiple files using files parameter
    // const { photos } = await Camera.pickImages({
    //   quality: 90,
    // });
    // await Share.share({
    //   files: photos.map(photo => photo.path!),
    // });
    
  }
}
