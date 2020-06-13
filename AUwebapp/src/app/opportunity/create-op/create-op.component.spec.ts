import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOpComponent } from './create-op.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule,MatDialogRef} from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
describe('CreateOpComponent', () => {
  let component: CreateOpComponent;
  let fixture: ComponentFixture<CreateOpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOpComponent ],
      imports: [HttpClientTestingModule,MatSnackBarModule,MatDialogModule],
      providers:[{ provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a submit and clear button', () => {
    const buttons =fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length>=2).toBeTruthy();
   });
  
 
});
