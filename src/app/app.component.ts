import { Component } from '@angular/core';
import { UtilService } from './services/util.service';
import { CompanyInfo } from './model/companyinfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  companyInfo:CompanyInfo;
  constructor(private utilService:UtilService){
    this.companyInfo = this.utilService.getCompanyInfo();
  }

}
