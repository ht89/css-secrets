import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {
    let svgPies = document.querySelectorAll('svg-pie');
    if (!svgPies) return;

    for (let i = 0; i < svgPies.length; i++) {
      let p = parseFloat(svgPies[i].textContent ?? '');
      let NS = 'http://www.w3.org/2000/svg';
      let svg = document.createElementNS(NS, 'svg');
      let circle = document.createElementNS(NS, 'circle');
      let title = document.createElementNS(NS, 'title');

      circle.setAttribute('r', '16');
      circle.setAttribute('cx', '16');
      circle.setAttribute('cy', '16');
      circle.setAttribute('stroke-dasharray', p + ',100');
      circle.setAttribute('_ngcontent-c1', '');

      svg.setAttribute('viewBox', '0 0 32 32');
      svg.setAttribute('_ngcontent-c1', '');

      title.textContent = svgPies[i].textContent;
      title.setAttribute('_ngcontent-c1', '');

      svgPies[i].textContent = '';

      svg.appendChild(title);
      svg.appendChild(circle);
      svgPies[i].appendChild(svg);
    }
  }

  ngAfterViewInit() {}
}
