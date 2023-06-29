1.修改默认组件模式 mode ios md 
AppModule 下导入模块  IonicModule
IonicModule.forRoot({
    mode:'ios'    
})
2.修改tabs 选中 和 hover 颜色
$selectedcolor: red;
// 重写激活样式
:host ::ng-deep {
    .tab-selected {
        color: $selectedcolor;
    }

    .tab-has-icon:hover{
        ion-icon{
            color: $selectedcolor;
        }
    }
    .tab-has-label:hover{
        ion-label{
            color: $selectedcolor;
        }
    }
}
3.修改状态栏颜色
npm install @capacitor/status-bar
npx cap sync

StatusBar.setStyle({ style: Style.Light }).then(()=>{
      console.log(123);
});
StatusBar.setBackgroundColor({
      color:'#f7f7f7'
})