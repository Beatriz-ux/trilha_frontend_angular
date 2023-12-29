import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit {
  apiPhotosKey = "SfOzAFE-EP-_QY9eTZo22HZ7IPIgAOVvqul0hxjplts";
  photos: IPhoto[] = [];

  ngOnInit() {
    this.insereFotos();
  }

  insereFotos() {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=education&client_id=${this.apiPhotosKey}`
    )
      .then((response) => response.json())
      .then((data: IPhotos) => {
        this.photos = data.results.slice(0, 3);
      });
  }
}

interface IPhotos {
  total: number;
  total_pages: number;
  results: IPhoto[];
}

interface IPhoto {
  alt_description: string;
  urls: {
    full: string;
    regular: string;
  };
}
