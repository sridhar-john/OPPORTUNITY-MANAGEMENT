import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { environment} from 'src/environments/environment';
import { Router } from '@angular/router';
import { CreateOpService } from 'src/app/shared/create-op.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

 
  constructor(public _router: Router,public service:CreateOpService,public httpClient: HttpClient) {
   }
  username=localStorage.getItem('username');
  email=localStorage.getItem('email');
  image=localStorage.getItem('img');

  BASE_URL=environment.BASE_URL;
   public single1: Object;
   public single3: Object;
   public single4: Object;

  ngOnInit(): void {

  this.httpClient.get(this.BASE_URL + '/trends/oppcount').subscribe((data)=>{
    this.single1=data;
    console.log(this.single1);
  },error => {

  });

    this.httpClient.get(this.BASE_URL + '/trends/locationcount').subscribe((data)=>{
      this.single3=data;
      console.log(this.single3);
      
  },error => {

  });

  this.httpClient.get(this.BASE_URL + '/trends/skillcount').subscribe((data)=>{
    this.single4=data;
    console.log(this.single4);
    
},error => {

});

}

  
 view1: any[] = [500, 300];
 gradient1: boolean = true;
 showLegend1: boolean = true;
 showLabels: boolean = true;
 isDoughnut: boolean = false;
 legendPosition1: string = 'right';
 legendTitle:string='Developers';
 scheme:string='forest';
 colorScheme1 = "ocean";
 


view2: any[] = [500, 300];
showXAxis2 = true;
showYAxis2 = true;
gradient2 = true;
showLegend2 = true;
legendPosition2='right';
showXAxisLabel2 = true;
xAxisLabel2 = 'Opportunities';
showYAxisLabel2 = true;
yAxisLabel2 = 'No Of Openings';
colorScheme2 = 'picnic';


  view3: any[] = [500, 300];
  showXAxis3 = true;
  showYAxis3 = true;
  gradient3 = true;
  showLegend3 = true;
  legendPosition3='right';
  showXAxisLabel3 = true;
  xAxisLabel3 = 'Location';
  showYAxisLabel3 = true;
  yAxisLabel3 = 'No Of Openings';
  colorScheme3 = 'picnic';
  
  view4: any[] = [500, 300];
  showXAxis4 = true;
  showYAxis4 = true;
  gradient4 = true;
  showLegend4 = true;
  legendPosition4='right';
  showXAxisLabel4 = true;
  xAxisLabel4 = 'Skills';
  showYAxisLabel4 = true;
  yAxisLabel4 = 'No Of Openings';
  colorScheme4 = 'picnic';
  
 
onLogout()
{
    localStorage.clear();
    this._router.navigateByUrl("/login");    
}

}
