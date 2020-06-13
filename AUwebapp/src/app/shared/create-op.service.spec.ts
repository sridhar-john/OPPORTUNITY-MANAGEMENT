import { TestBed } from '@angular/core/testing';

import { CreateOpService } from './create-op.service';
import { HttpClientTestingModule ,HttpTestingController} from '@angular/common/http/testing';
import { Opportunity } from '../models/Opportunity';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CareteOpService', () => {
  let service: CreateOpService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,ReactiveFormsModule,FormsModule]
    });
    service = TestBed.inject(CreateOpService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  
  it('should retrieve opportunties from the API via GET',() =>{
    const dummyopp:Opportunity[] = [
      { id:20,opportunity_name: 'java dev',hiring_manager: 'surya',skill: 'java',creator: 'john',creator_email: 'john@gmail.com',experience: 2,job_location: 'chennai',joining_date: '01/jun/20',updated_date: '01/may/20'},
      {  id:21,opportunity_name: 'java dev',hiring_manager: 'surya',skill: 'java',creator: 'john',creator_email: 'john@gmail.com',experience: 2,job_location: 'chennai',joining_date: '01/jun/20',updated_date: '01/may/20'}
    ];
    service.getOpportunity().subscribe(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(dummyopp);
    });

    
  })

  it('should add opportunities from the API via POST',() =>{
    const newopp ={opportunity_name:'java dev1',hiring_manager:'surya',skill: 'java',creator: 'john',creator_email: 'john@gmail.com',experience: 2,job_location: 'chennai',joining_date: '01/jun/20',updated_date: '01/may/20'};
    
    service.insertOpportunity(newopp).subscribe(data=>{
      console.log(data);
      expect(data).toEqual("Inserted SucessFully");
    });
  });

  it('should update opportunities from the API via PUT',() =>{
    const newopp ={opportunity_name:'java dev1',hiring_manager:'surya',skill: 'java',creator: 'john',creator_email: 'john@gmail.com',experience: 2,job_location: 'chennai',joining_date: '01/jun/20',updated_date: '01/may/20'};
    
    service.updateOpportunity(newopp).subscribe(data=>{
      console.log(data);
      expect(data).toEqual("Updated SucessFully");
    });
  });

  it('should update opportunities from the API via DELETE',() =>{
    let id:1;    
    service.deleteOpportunity(id).subscribe(data=>{
      console.log(data);
      expect(data).toEqual("Deleted SucessFully");
    });
  });
  
                                      /*Form validation*/

      it('Is from valid when empty()',() =>{
          expect(service.form.valid).toBeFalsy();
      });

      it('Is form valid when requird fields are filled',()=>{
        let opportunityname=service.form.controls['opportunity_name'];
        opportunityname.setValue("java dev"); 
        let hiring_manager=service.form.controls['hiring_manager'];
        hiring_manager.setValue("sridhar");
        let skill=service.form.controls['skill'];
        skill.setValue("java");
        let creator=service.form.controls['creator'];
        creator.setValue("surya");
        let creator_email=service.form.controls['creator_email'];
        creator_email.setValue("surya@gamil.com");
        let experience= service.form.controls['experience'];
        experience.setValue(2);
        let job_location=service.form.controls['job_location'];
        job_location.setValue("chennai");
        let joining_date=service.form.controls['joining_date'];
        joining_date.setValue("21/may/2020");
        expect(service.form.valid).toBeTruthy();
      });

      it('email field validity',()=>{
        let creator_email=service.form.controls['creator_email'];
        expect(creator_email.valid).toBeFalsy();

        let errors={};
        errors=creator_email.errors || {};
        expect(errors['required']).toBeTruthy();

      });


});
