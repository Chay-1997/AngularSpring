import { Component, OnInit } from '@angular/core';
import{CustomerServiceService} from '../customer-service.service';
import{Customer} from '../customer';
import { removeSummaryDuplicates } from '@angular/compiler';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  customername:string="";
  cust:any;

  constructor(private service:CustomerServiceService) { }

  ngOnInit(): void {
  }

  public getCustomerByName()
  {
    let res=this.service.customerByName(this.customername);
    res.subscribe(data=>this.cust=data);

  }


}
