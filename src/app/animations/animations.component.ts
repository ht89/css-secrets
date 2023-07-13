import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
})
export class AnimationsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // adjust the animation based on h1 content
    const h1 = document.querySelector('h1');
    if (!h1) return;

    let h1Length = h1.textContent?.length;
    let s = h1.style;

    s.width = h1Length + 'ch';
    s.animationTimingFunction = 'steps(' + h1Length + '), steps(1)';
  }
}
