import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() nombre: string;//<-- Esto viene de "app.component.html"
  @Input() size: string;
  constructor() {
    this.nombre = "";
    this.size = '';
  }

  ngOnInit(): void {
  }

}
