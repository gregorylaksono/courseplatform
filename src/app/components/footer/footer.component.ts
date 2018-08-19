import { Component, OnInit, Input } from '@angular/core';
import { CompanyInfo } from '../../model/companyinfo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() companyInfo :CompanyInfo;
  
  constructor() { }

  ngOnInit() {
  }

}
