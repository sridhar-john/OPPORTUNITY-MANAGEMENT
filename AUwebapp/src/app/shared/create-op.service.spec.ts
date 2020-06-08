import { TestBed } from '@angular/core/testing';

import { CreateOpService } from './create-op.service';
import { HttpClientTestingModule ,HttpTestingController} from '@angular/common/http/testing';
import { Opportunity } from '../Opportunity';
import { request } from 'http';

describe('CareteOpService', () => {
  let service: CreateOpService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CreateOpService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() =>{
    httpMock.verify();
  }
  );
  it('should retrieve opportunties from the API via GET',() =>{
    const dummyopp:Opportunity[] = [
      { id:20,opportunity_name: 'java dev',hiring_manager: 'surya',skill: 'java',creator: 'john',creator_email: 'john@gmail.com',experience: 2,job_location: 'chennai',joining_date: '01/jun/20',updated_date: '01/may/20'},
      {  id:21,opportunity_name: 'java dev',hiring_manager: 'surya',skill: 'java',creator: 'john',creator_email: 'john@gmail.com',experience: 2,job_location: 'chennai',joining_date: '01/jun/20',updated_date: '01/may/20'}
    ];
    service.getOpportunity().subscribe(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(dummyopp);
    });

    const request = httpMock.expectOne('http://localhost:8080/opportunity/');

    expect(request.request.method).toBe('GET');
    request.flush(dummyopp);
  })

  it('should add opportunities from the API via POST',() =>{
    const newopp ={opportunity_name:'java dev1',hiring_manager:'surya',skill: 'java',creator: 'john',creator_email: 'john@gmail.com',experience: 2,job_location: 'chennai',joining_date: '01/jun/20',updated_date: '01/may/20'};
    
    service.insertOpportunity(newopp).subscribe(data=>{
      console.log(data);
      expect(data).toEqual("Inserted SucessFully");
    });

    const request =httpMock.expectOne('http://localhost:8080/opportunity/');

    expect(request.request.method).toBe('POST');
    request.flush(newopp);

  })



});
