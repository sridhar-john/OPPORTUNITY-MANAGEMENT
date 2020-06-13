import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateOpService} from "../../shared/create-op.service";
import { NotificationService} from "../../shared/notification.service";

@Component({
  selector: 'app-create-op',
  templateUrl: './create-op.component.html',
  styleUrls: ['./create-op.component.css']
})
export class CreateOpComponent implements OnInit {
  selectedExperience: string;
  js:string;
  us:string;
  jd:Date;
  ud:Date;
  experience=[1,2,3,4,5];
  location=["Chennai","Banglore","Mumbai","Hyderabad"];
  public opp =[];

  submit_message:any;
  update_message:any;
  

  constructor(public service: CreateOpService,public notificationService: NotificationService,
    public dialogRef:MatDialogRef<CreateOpComponent>,@Inject(MAT_DIALOG_DATA) public data:any) 
    { }
  
  onClear()
  {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit()
  {
      
    if(this.service.form.valid)
    {
       if(!this.service.form.get('id').value)
       {
        this.js=this.jd.toDateString();
        var splited=this.js.split(" ",4);
        this.js=splited[2]+"/"+splited[1]+"/"+splited[3];
        this.us=this.ud.toDateString();
        var splited1=this.us.split(" ",4);
        this.us=splited1[2]+"/"+splited1[1]+"/"+splited1[3];
        this.service.form.patchValue( {
           joining_date:this.js,
            updated_date:this.us
         }
        );
               
          let res=this.service.insertOpportunity(this.service.form.value);
          res.subscribe((data)=>{
            this.submit_message=data;
            
          });
        }
        else{
          this.js=this.jd.toDateString();
          var splited=this.js.split(" ",4);
          this.js=splited[2]+"/"+splited[1]+"/"+splited[3];
          this.us=this.ud.toDateString();
          var splited1=this.us.split(" ",4);
          this.us=splited1[2]+"/"+splited1[1]+"/"+splited1[3];
          this.service.form.patchValue( {
             joining_date:this.js,
              updated_date:this.us});
        
          let resp=this.service.updateOpportunity(this.service.form.value);
          resp.subscribe((data)=>{
            this.update_message=data;
             
          });

        }

          this.service.form.reset();
          this.service.initializeFormGroup();
          this.notificationService.sucess("Submited successfully!!");
          this.onClose();
    }
  }
  onClose()
  {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

  onExperience(ob)
  {
    let selected=ob.value;
    this.service.form.get('experience').setValue(selected);

  }
  onLocation(ob)
  {
    let selected=ob.value;
    this.service.form.get('job_location').setValue(selected);
  
  }
    ngOnInit(){
 
    if((this.service.form.get('id').value))
    {
      this.service.form.get('job_location').setValue(this.data.job_location);
      this.service.form.get('experience').setValue(this.data.experience);
      this.jd= new Date(this.data.joining_date) ;          
      this.ud= new Date(this.data.updated_date) ;    
    }

  }
  
     
 }


