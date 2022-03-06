import { Component } from '@angular/core';
import { Observable, subscribeOn, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetjsondataService } from './getjsondata.service';
import { HttpDataRequestService } from './http-data-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week3extrawork';

constructor(public ht:HttpDataRequestService){}
ngOnInit()
{
  this.ht.getdata().subscribe((data) => this.show(data));
}
myForm:any
htdata:any;
id=""
name=""
number=""
street=""
city=""
state=""
zip=""
show(data:any)
{
  this.htdata = data;
}

showdatatoform(id:any)
{
  console.log(id);
  this.name = this.htdata[id-1].Name;
  this.number = this.htdata[id-1].Mobileno;
  this.street = this.htdata[id-1].Street;
  this.city = this.htdata[id-1].City;
  this.state = this.htdata[id-1].State;
  this.zip = this.htdata[id-1].Zip;

}
}

