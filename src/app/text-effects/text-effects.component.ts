import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-effects',
  templateUrl: './text-effects.component.html',
  styleUrls: ['./text-effects.component.scss']
})
export class TextEffectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      let dynamicCircularEls = document.getElementsByClassName('dynamic-circular');

      for (let i = 0; i < dynamicCircularEls.length; i++) {
          var NS = 'http://www.w3.org/2000/svg';
          var xlinkNS = 'http://www.w3.org/1999/xlink';
          var svg = document.createElementNS(NS, 'svg');
          var circle = document.createElementNS(NS, 'path');
          var text = document.createElementNS(NS, 'text');
          var textPath = document.createElementNS(NS, 'textPath');

          svg.setAttribute('viewBox', '0 0 100 100');

          circle.setAttribute('d', 'M0,50 a50,50 0 1,1 0,1z');
          circle.setAttribute('id', 'circle');

          textPath.textContent  = dynamicCircularEls[i].textContent;
          textPath.setAttributeNS(xlinkNS, 'xlink:href', '#circle');

          text.appendChild(textPath);
          svg.appendChild(circle);
          svg.appendChild(text);

          (circle as HTMLElement).style.fill = 'none';
          (svg as HTMLElement).style.display = 'block';
          (svg as HTMLElement).style.overflow = 'visible';

          dynamicCircularEls[i].textContent = '';
          dynamicCircularEls[i].appendChild(svg);

      }

  }

}
