import { Component } from '@angular/core';
// @Component 组件元数据装饰器
// 用来告知angluar 框架如何处理typescript类,装饰器包含多个属性,这些属性叫做元数据,angular,angular会依据这些元素
@Component({
  selector: 'app-root',
  // 模板template的定义组件的外观,以HTML的形式存在,告诉angular如何渲染组件,在模板中可以使用angular的数据绑定语法,来呈现控制器中的数据
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// 控制器,普通的typescript类,会被装饰器装饰,包含组件所有的属性和方法,绝大多数的页面都是写在控制器中的,控制器通过数据与模块的通讯,模板展现控制器的数据,控制器处理模板的事件
export class AppComponent {
  title = 'app';
}

// 输入属性 @input()
// 用来接收外部传递的属性,接收属性可以使父组件可以直接传递数据给子组件
// 提供器 provider 用来做注入依赖
// 声明周期钩子,lifecycle hooks 组件从创建到销毁这个过程中许多的钩子可以用来触发,执行一些业务的罗杰
// 样式表 styles 提供组件模板所提供的所有的样式

// animation 动画 angular 提供的动画包,创建组件相关的动画效果

// 输出属性@ouput 用于组价的共享数据
