import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  // 申明一个属性,用于从product组件接收值
  @Input()
  private rating:number=0;
  private stars:boolean[];
  constructor() { }
  // 初始化组件时调用
  ngOnInit() {
    this.stars=[];
    for (let i = 1; i <= 5; i++) {
      console.log(this.rating);
       this.stars.push(i>this.rating);
    }
  }

}
