import { Injectable } from '@angular/core';
import { CompanyInfo } from '../model/companyinfo';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public getCompanyInfo() :CompanyInfo{
    let cinf : CompanyInfo = new CompanyInfo("PT.Gregory laksono","Pesona Depok blok XX no. 12", "Depok", "021-55545864");
    return cinf;
  }
}
