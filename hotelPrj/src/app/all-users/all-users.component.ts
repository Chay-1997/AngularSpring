import { Component, OnInit } from '@angular/core';
import{CustomerServiceService} from '../customer-service.service';
import{Customer} from '../customer';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  cust:any;

  constructor(private service:CustomerServiceService) { }

  ngOnInit(): void {
   let res=this.service.getCustomers();
   res.subscribe(data=>this.cust=data);

  }
  
  public removeUser(customerName:string)
  {
    let res=this.service.removeUser(customerName);
    res.subscribe(data=>this.cust=data);

  }

}
