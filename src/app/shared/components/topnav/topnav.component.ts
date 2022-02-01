import { Component } from '@angular/core';
import { Company, Service } from './app.service';

@Component({
  selector: 'mrl-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  providers: [Service],
  preserveWhitespaces: true,
})
export class TopnavComponent {
  companies: Company[];

  itemCount: number;

  constructor(service: Service) {
    this.companies = service.getCompanies();
    this.itemCount = this.companies.length;
  }
}
