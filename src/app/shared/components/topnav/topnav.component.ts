import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mrl-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  @Input() title: string;

  constructor() {
    this.title = '';
  }

  ngOnInit(): void {
  }

}
