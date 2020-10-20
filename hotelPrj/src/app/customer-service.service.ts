import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient) { }

  public getCustomers()
  {
    return this.http.get("http://localhost:8080/getAll");
  }

  public registerCustomer(customer)
  {
    return this.http.post("http://localhost:8080/save",customer,{responseType:"text" as "json"});
  }

  public customerByName(customerName)
  {
    return this.http.get("http://localhost:8080/find/"+customerName)
  }

  public removeUser(customerName)
  {
    return this.http.get("http://localhost:8080/delete/"+customerName);
  }


}
