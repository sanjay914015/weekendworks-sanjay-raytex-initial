import { Component, OnInit } from '@angular/core';
import { Observable, subscribeOn, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpDataRequestService } from '../http-data-request.service';
import { GetjsondataService } from '../getjsondata.service';

@Component({
  selector: 'app-putjsondataintoform',
  templateUrl: './putjsondataintoform.component.html',
  styleUrls: ['./putjsondataintoform.component.css']
})
export class PutjsondataintoformComponent implements OnInit {

  
constructor(public ht:GetjsondataService){}
ngOnInit()
{
  this.ht.getdata().subscribe((data) => this.show(data));

}
myForm:any
htdata:any;
id=""
name=""
username=""
email=""
address=""
phone=""
website=""
company=""
show(data:any)
{
  this.htdata = data;
}

showdatatoform(id:any)
{
  console.log(id);
  this.name = this.htdata[id-1].name;
  this.username = this.htdata[id-1].username;
  this.email = this.htdata[id-1].email;
  this.address = this.htdata[id-1].address;
  this.phone = this.htdata[id-1].phone;
  this.website = this.htdata[id-1].website;
  this.company = this.htdata[id-1].company;

}

}
