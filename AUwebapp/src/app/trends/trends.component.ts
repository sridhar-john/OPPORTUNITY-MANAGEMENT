import { Component, OnInit } from '@angular/core';
import { single1 } from 'src/app/charts/data';
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
}

onActivate1(data): void {
}

onDeactivate1(data): void {
}




single2: any[];
multi2: any[];

view2: any[] = [700, 400];

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
 
}
onLogout()
{
    localStorage.clear();
    this._router.navigateByUrl("/login");    
}

}
