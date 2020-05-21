import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Look at these cool images:';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://blogthebloggers.files.wordpress.com/2010/06/rick-astley-2.jpg?w=584';
  image3 = 'https://i.redd.it/bekphnqftcb41.jpg';

  constructor() { }

  ngOnInit() {
  }

}
