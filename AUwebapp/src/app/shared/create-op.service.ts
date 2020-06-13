import { Injectable } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateOpService {


  constructor(private http: HttpClient) { }

  BASE_URL=environment.BASE_URL;
  public op=[];
  form: FormGroup = new FormGroup(
    {
      id: new FormControl(null),
      opportunity_name: new FormControl('',Validators.required),
      hiring_manager: new FormControl('',Validators.required),
      skill: new FormControl('',Validators.required),
      creator: new FormControl('',Validators.required),
      creator_email: new FormControl('',[Validators.email,Validators.required]),
      experience: new FormControl(0,Validators.required),
      job_location: new FormControl('',Validators.required),
      joining_date: new FormControl('',Validators.required),
      updated_date: new FormControl('',Validators.required)
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
      job_location: '0',
      joining_date: '',
      updated_date: ''
    });
  }

   insertOpportunity(opportunity)
  {
    return this.http.post(this.BASE_URL,opportunity,{responseType:'text' as 'json'});
    
  }
  getOpportunity()  {
      return  this.http.get<any>(this.BASE_URL);
      
  }


  updateOpportunity(opportunity)
  {
    return this.http.put(this.BASE_URL,opportunity,{responseType:'text' as 'json'});
  }

  deleteOpportunity(id)
  {
    return this.http.delete(this.BASE_URL+id,{responseType:'text' as 'json'});
  }

  populateForm(opportunity)
  {
    
    this.form.setValue(opportunity);
    

  }


}
