import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss'],
  template: `
    <div>
      <div id="particles-js"></div>
    </div>
  `,
})
export class ParticlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'particles.json', null);
  }

}
