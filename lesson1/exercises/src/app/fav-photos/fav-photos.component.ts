import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Works of Art';
  image1 = 'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F033%2F376%2Ftiger.jpg';
  image2 = 'https://blogthebloggers.files.wordpress.com/2010/06/rick-astley-2.jpg?w=584';
  image3 = 'https://i.redd.it/bekphnqftcb41.jpg';
  image4 = 'https://media2.giphy.com/media/LmNwrBhejkK9EFP504/200.gif'

  constructor() { }

  ngOnInit() {
  }

}
