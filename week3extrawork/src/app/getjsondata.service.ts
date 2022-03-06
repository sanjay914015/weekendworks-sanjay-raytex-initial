import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetjsondataService {

  constructor(public ht:HttpClient) { }

  public firstname:any;
  public lastname:any;
  public contact:any;
  public getdata()
  {
    return this.ht.get("https://jsonplaceholder.typicode.com/users");
  }
}
