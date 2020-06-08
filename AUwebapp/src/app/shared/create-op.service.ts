import { Injectable } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class CreateOpService {


  constructor(private http: HttpClient) { }

  public op=[];
  form: FormGroup = new FormGroup(
    {
      id: new FormControl(null),
      opportunity_name: new FormControl('',Validators.required),
      hiring_manager: new FormControl('',Validators.required),
      skill: new FormControl('',Validators.required),
      creator: new FormControl('',Validators.required),
      creator_email: new FormControl('',[Validators.email,Validators.required]),
      experience: new FormControl(0),
      job_location: new FormControl(0,Validators.required),
      joining_date: new FormControl('',Validators.required),
      updated_date: new FormControl('')
    }
  );
  initializeFormGroup()
  {
    this.form.setValue({
      id: null,
      opportunity_name: '',
      hiring_manager: '',
      skill: '',
      creator: '',
      creator_email: '',
      experience: 0,
      job_location: 0,
      joining_date: '',
      updated_date: ''
    });
  }

   insertOpportunity(opportunity)
  {
    return this.http.post("http://localhost:8080/opportunity/",opportunity,{responseType:'text' as 'json'});
    
  }
  getOpportunity()  {
      return  this.http.get<any>("http://localhost:8080/opportunity/");
       
  }


  upadteOpportunity(opportunity)
  {
    return this.http.put("http://localhost:8080/opportunity/",opportunity,{responseType:'text' as 'json'});
  }

  deleteOpportunity(id)
  {
    return this.http.delete("http://localhost:8080/opportunity/"+id,{responseType:'text' as 'json'});
  }

  populateForm(opportunity)
  {
    console.log(opportunity);
    this.form.setValue(opportunity);
 
  }


}
