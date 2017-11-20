import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product> = [];
  private imgUrl = "http://placehold.it/320x150"
  constructor() {
    this.products = [
      new Product(1, '第一个商品', 199.99, 3.5, '第一个商品还好', ["电子产品"]),
      new Product(2, '第二个商品', 9.99, 1.5, '第2个商品还好', ["服饰产品"]),
      new Product(3, '第三个商品', 1.99, 2.5, '第3个商品还好', ["包包产品"]),
      new Product(4, '第四个商品', 100.99, 4, '第4个商品还好', ["包臀群产品"]),
      new Product(5, '第五个商品', 200.99, 0.5, '第5个商品还好', ["电子产品"]),
      new Product(6, '第六个商品', 399.99, 1.5, '第6个商品还好', ["电子产品"]),
    ]
  }

  ngOnInit() {
    setTimeout(()=>{
       this.products.push( new Product(7, '第七个商品', 199.99, 5, '第7个商品还好', ["电子产品"]),)
    },4000)
  }

}
// 产品描述信息
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>  //表示categories 是数组类型
  ) {

  }
}
