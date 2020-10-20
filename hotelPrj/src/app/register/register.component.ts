import { Component, OnInit } from '@angular/core';
import{CustomerServiceService} from '../customer-service.service';
import{Customer} from '../customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  cus:Customer=new Customer("",0,"",0,0);
  message:any;
  constructor(private service:CustomerServiceService) { }

  ngOnInit(): void {
  }

public registerNow()
{
  let res=this.service.registerCustomer(this.cus);
  res.subscribe(data=>this.message=data);

}

}
