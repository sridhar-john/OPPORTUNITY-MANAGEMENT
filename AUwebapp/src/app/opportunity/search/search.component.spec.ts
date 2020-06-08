import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MatDialogModule,MatDialogRef} from '@angular/material/dialog'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import {MatMenuModule} from '@angular/material/menu';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
