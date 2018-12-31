import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  featured = [
    {
      id: 1,
      link: 'https://www.53.com/content/dam/fifth-third/brand/card/cc-secured.jpg',
      title: 'Chase Ink Business Card',
      price: '$2000',
      offer: '$500 cash Back',
      likes_1: 0
    },
    {
      id: 2,
      link: 'https://images-na.ssl-images-amazon.com/images/I/61fUPugFHEL._UX342_.jpg',
      title: 'Chase Ink Business Card',
      price: '$2000',
      offer: '$500 cash Back',
    },
    {
      id: 3,
      link: 'https://www.pngarts.com/files/2/Shoes-Transparent-Background-PNG.png',
      title: 'Chase Ink Business Card',
      price: '$2000',
      offer: '$500 cash Back',
    },
    {
      id: 4,
      link: 'https://previews.123rf.com/images/monika3stepsahead/monika3stepsahead1106/monika3stepsahead110600019/9832370-blue-jeans-for-girls-isolated-on-white-background.jpg',
      title: 'Chase Ink Business Card',
      price: '$2000',
      offer: '$500 cash Back',
    },
    {
      id: 5,
      link: 'http://www.stickpng.com/assets/images/5a05cbd39cf05203c4b60467.png',
      title: 'Chase Ink Business Card',
      price: '$2000',
      offer: '$500 cash Back',
    },
    {
      id: 6,
      link: 'https://us.123rf.com/450wm/dezydezy/dezydezy1708/dezydezy170800034/84224802-tv-modern-blank-screen-lcd-isolated-on-transparent-background.jpg?ver=6',
      title: 'Chase Ink Business Card',
      price: '$2000',
      offer: '$500 cash Back',
    },
    {
      id: 7,
      link: 'http://www.pngmart.com/files/3/Branded-Watch-Transparent-Background.png',
      title: 'Chase Ink Business Card',
      price: '$2000',
      offer: '$500 cash Back',
    },
    {
      id: 8,
      link: 'https://png.pngtree.com/element_origin_min_pic/17/09/15/3bac7568f6aa82a80217c9878038143c.jpg',
      title: 'Chase Ink Business Card',
      price: '$2000',
      offer: '$500 cash Back',
    },
    {
      id: 9,
      link: 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2011/01/toy_thumb.jpg',
      title: 'Chase Ink Business Card',
      price: '$2000',
      offer: '$500 cash Back',
    },
    {
      id: 10,
      link: 'http://www.mithraav.com/img/speakers/Polk_icon_Signaturefamily_480x480.png',
      title: 'Chase Ink Business Card',
      price: '$2000',
      offer: '$500 cash Back',
    },
    {
      id: 11,
      link: 'https://www.sony.com/image/b4698bb5d24076a3cd8d09e5dbb64834?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320',
      title: 'Chase Ink Business Card',
      price: '$2000',
      offer: '$500 cash Back',
    },
    {
      id: 12,
      link: 'https://img.freepik.com/free-vector/vector-illustration-perfume-in-a-glass-bottle-on-a-background-with-luxurious-white-lily_1441-284.jpg?size=338&ext=jpg',
      title: 'Chase Ink Business Card',
      price: '$2000',
      offer: '$500 cash Back',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

 }
