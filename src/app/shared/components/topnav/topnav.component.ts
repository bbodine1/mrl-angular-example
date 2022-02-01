import { Component, OnInit, Input } from '@angular/core';

import {
  DxTabPanelModule,
  DxCheckBoxModule,
  DxTemplateModule,
} from 'devextreme-angular';

import { Company, Service } from './topnav.service';

@Component({
  selector: 'mrl-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent implements OnInit {
  @Input() title: string;

  constructor() {
    this.title = '';
  }

  ngOnInit(): void {}
}
