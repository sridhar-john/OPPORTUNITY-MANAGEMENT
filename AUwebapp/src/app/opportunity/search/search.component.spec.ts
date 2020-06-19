import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MatDialogModule,MatDialogRef} from '@angular/material/dialog'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import {MatMenuModule} from '@angular/material/menu';
import { By } from '@angular/platform-browser';
import { CreateOpService } from 'src/app/shared/create-op.service';
import { of,throwError } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let search:CreateOpService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [HttpClientTestingModule,MatDialogModule,MatSnackBarModule,RouterTestingModule,MatMenuModule],
      providers:[{provide:MatDialogRef,useValue:{} } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    search = TestBed.get(CreateOpService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dialog box open when click on CreateOpportunity', () => {
    let btn = fixture.debugElement.query(By.css('.CreateOpportunity'));
});

it('Should Call logout Method', async( () => {
  spyOn(component, 'onLogout');
   component.onLogout();
  expect(component.onLogout).toHaveBeenCalled();

}));

it('should call filter ', async(() => {
  spyOn(component, 'applyFilter');
  component.applyFilter();
 expect(component.applyFilter).toHaveBeenCalled();

 
}));

it('Should Call Get all opportunity and Return Some Data',async( () => {
  spyOn(search, 'getOpportunity').and.returnValue( of ([name]));
  component.ngOnInit();
  expect(search.getOpportunity).toHaveBeenCalled();
  expect(component.dataSource.data).toEqual([name]);
}));

it('Should Call Get all opportunity and Return No Data', async(() => {
  spyOn(search, 'getOpportunity').and.returnValue( of ([]));
  component.ngOnInit();
  expect(search.getOpportunity).toHaveBeenCalled();
  expect(component.dataSource.data).toEqual([]);
}));



});
