import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsComponent } from './trends.component';
import { RouterTestingModule } from '@angular/router/testing';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientTestingModule ,HttpTestingController} from '@angular/common/http/testing';

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
});
