import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title="Glitter Store";

  name="Mobile Phones";
  namestyle={
    'color':'green'
  }
  imgstyle={
    'style.width.px':"200",
    'style.height.px':"200"
  }

  titlestyle={
    'color':'gray',
    'fontsize.em':4.5,
    'fontVarient':'small-caps',
    'style.fontStyle':'italic' //it will not work
  }

  product=[
    {
      id:1,
      name:"Mi",
      price:20000,
      image:"/assets/mi.png",
      description:""

    },
    {
      id:2,
      name:"Real Me",
      price:25000,
      image:"/assets/realme.jpg",
      description:""
    },
    {
      id:3,
      name:"vivo",
      price:22000,
      image:"/assets/vivo.png",
      description:""
    },
    {
      id:4,
      name:"One Plus",
      price:45000,
      image:"/assets/one plus.png",
      description:""
    },
    {
      id:5,
      name:"IPhone",
      price:120000,
      image:"/assets/iphone.png",
      description:""
    },
    {
      id:6,
      name:"Oppo",
      price:27000,
      image:"/assets/oppo.png",
      description:""
    },
    {
      id:7,
      name:"Samsung",
      price:35000,
      image:"/assets/samsung.avif",
      description:""
    }
]
}
