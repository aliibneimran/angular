import { Component } from '@angular/core';
const IMAGES:any = [];
IMAGES[0] = 'https://picsum.photos/id/944/1200/400';
IMAGES[1] = 'https://picsum.photos/id/1011/1200/400';
IMAGES[2] = 'https://picsum.photos/id/984/1200/400';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1200/400`);
  images = IMAGES;
}
