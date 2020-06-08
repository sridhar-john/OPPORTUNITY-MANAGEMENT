import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {ReactiveFormsModule} from '@angular/forms';

import { TrendsComponent } from './trends/trends.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { CreateOpComponent } from './opportunity/create-op/create-op.component';
import { CreateOpService } from './shared/create-op.service';
import { NotificationService} from "./shared/notification.service";
import { SearchComponent } from './opportunity/search/search.component';
import {MatMenuModule} from '@angular/material/menu';

import { UserService } from 'src/app/shared/user.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrendsComponent,
    OpportunityComponent,
    CreateOpComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule
  ],
  providers: [CreateOpService,NotificationService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserService,
    multi:true
  }],
  bootstrap: [AppComponent],
  entryComponents: [CreateOpComponent]
})
export class AppModule { }
