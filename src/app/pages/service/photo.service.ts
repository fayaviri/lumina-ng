import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  getImages() {
    return [
      { itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg', alt: 'Imagen 1', title: 'Imagen 1' },
      { itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg', alt: 'Imagen 2', title: 'Imagen 2' }
    ];
  }
}
