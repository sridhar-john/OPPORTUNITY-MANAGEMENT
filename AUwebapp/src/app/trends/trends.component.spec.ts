import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsComponent } from './trends.component';
import { RouterTestingModule } from '@angular/router/testing';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientTestingModule ,HttpTestingController} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

describe('TrendsComponent', () => {
  let component: TrendsComponent;
  let fixture: ComponentFixture<TrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendsComponent ],
      imports: [RouterTestingModule,MatMenuModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Should Call Get Language Count and Return Some Data', () => {
    spyOn(component, 'onLogout').and.returnValue( );
    component.onLogout();
    expect(component.onLogout).toHaveBeenCalled();
});

it('should retrieve locationcount from the API via GET',() =>{
  const dummyopp = [
    {
      "name": "Banglore",
      "value": "2"
  },
  {
      "name": "Chennai",
      "value": "8"
  },
  {
      "name": "Hyderabad",
      "value": "1"
  },
  {
      "name": "Mumbai",
      "value": "10"
  }
  ];
  component.httpClient.get(environment.BASE_URL+'/trends/locationcount').subscribe(data => {
    expect(data).toEqual(dummyopp);
  });
});

  it('should retrieve skillcount from the API via GET',() =>{
    const dummyopp = [
      {
        "name": "angular",
        "value": "1"
    },
    {
        "name": "angular/springboot",
        "value": "3"
    },
    {
        "name": "COBOL",
        "value": "5"
    },
    {
        "name": "java",
        "value": "6"
    },
    {
        "name": "Python",
        "value": "5"
    },
    {
        "name": "Reactjs",
        "value": "1"
    }
    ];
    component.httpClient.get(environment.BASE_URL+'/trends/skillcount').subscribe(data => {
      expect(data).toEqual(dummyopp);
    });
  
  });

  it('should retrieve opportunitycount from the API via GET',() =>{
    const dummyopp = [
      {
        "name": "back-end developer",
        "value": "6"
    },
    {
        "name": "Front-end developer",
        "value": "2"
    },
    {
        "name": "Full-stack developer",
        "value": "3"
    },
    {
        "name": "Mainframe developer",
        "value": "5"
    },
    {
        "name": "python developer",
        "value": "5"
    }
    ];
    component.httpClient.get(environment.BASE_URL+'/trends/oppcount').subscribe(data => {
      expect(data).toEqual(dummyopp);
    });
  
  });
  
  it('Should Call logout Method', async( () => {
    spyOn(component, 'onLogout');
     component.onLogout();
    expect(component.onLogout).toHaveBeenCalled();
  
  }));
  

});
