import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single1 } from 'src/app/charts/data';
// import {single1} from 'src/app/opportunity/search/search.component';
import { single2} from 'src/app/charts/data';
import { Router } from '@angular/router';
import { CreateOpService } from 'src/app/shared/create-op.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

 
  constructor(public _router: Router,public service:CreateOpService) {
    Object.assign(this, { single1 });
    Object.assign(this, { single2 })
 
   }
  username=localStorage.getItem('username');
  email=localStorage.getItem('email');
  
 
  ngOnInit(): void {

  
}
  
  
  single1: any[];
  
  view1: any[] = [700, 400];
 // options
 gradient1: boolean = false;
 showLegend1: boolean = true;
 showLabels: boolean = true;
 isDoughnut: boolean = false;
 legendPosition1: string = 'right';
 legendTitle:string='Developers';
 scheme:string='forest';
 colorScheme1 = {
   domain: ['#ff3333', '#ffff1a', '#66ff66', '#1a8cff']
 };
 onSelect1(data): void {
  console.log('Item clicked', JSON.parse(JSON.stringify(data)));
}

onActivate1(data): void {
  console.log('Activate', JSON.parse(JSON.stringify(data)));
}

onDeactivate1(data): void {
  console.log('Deactivate', JSON.parse(JSON.stringify(data)));
}




single2: any[];
multi2: any[];

view2: any[] = [700, 400];

// options
showXAxis = true;
showYAxis = true;
gradient2 = false;
showLegend2 = true;
legendPosition2='below';
showXAxisLabel = true;
xAxisLabel = 'Opportunities';
showYAxisLabel = true;
yAxisLabel = 'No Of Oppenings';

colorScheme2 = {
  domain: ['#6666ff	', '#ff6666	', '#ffff66', ' #cc0000']
};

onSelect2(event) {
  console.log(event);
}
  onLogout()
  {
    localStorage.clear();
    this._router.navigateByUrl("/login");    
  }

}
