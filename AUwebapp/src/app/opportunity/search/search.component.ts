import { Component, OnInit ,ViewChild} from '@angular/core';
import { CreateOpService } from 'src/app/shared/create-op.service';
import { Opportunity } from 'src/app/Opportunity';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogConfig} from '@angular/material/dialog';
import { CreateOpComponent } from '../create-op/create-op.component';
import { NotificationService } from 'src/app/shared/notification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public service : CreateOpService,private dialog:MatDialog,private notificationService: NotificationService,public _router: Router) { }
  displayedColumns :any = ["id","opportunity_name","creator_email","hiring_manager","joining_date","skill","actions"];
  dataSource = new MatTableDataSource<Opportunity>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey:string;
  username=localStorage.getItem('username');
  email=localStorage.getItem('email');
 
  delete_message:any;
  ngOnInit(): void {
  
    if(localStorage.getItem('login')=="loggedIn")
    {
      this.notificationService.sucess('Login sucessfull and User is Authenticated !!!');
      localStorage.setItem('login',"loggedOut");
    }
   
    this.service.getOpportunity().subscribe((data: any[])=>{
      console.log(data);
      this.dataSource.data = data;
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;

  
      
    }
    ,(error) => {
      alert("User is not Authenticated Please login");
      this._router.navigateByUrl("/login");
     // alert(JSON.stringify(error, undefined, 2));
    });
  }

  onSearchClear()
  {
    this.searchKey=" ";
    this.applyFilter();
  }
  applyFilter(){
    this.dataSource.filter = this.searchKey.trim().toLocaleLowerCase();
  }
  onCreate()
  {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus=true;
    dialogConfig.width= "60%";
    this.dialog.open(CreateOpComponent,dialogConfig);
  }

onEdit(row)
{
  console.log(row);
  this.service.populateForm(row);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus=true;
  dialogConfig.width= "60%";
  this.dialog.open(CreateOpComponent,dialogConfig);
  
}

onDelete(id)
{
  if(confirm("Are You sure  to delete this record?")){
    let res=this.service.deleteOpportunity(id);
    res.subscribe(data => {
      console.log(data)
      this.delete_message=data;
      console.log(this.delete_message);
    });
    this.notificationService.warn('Deleted sucessfully!');
  }
}
onLogout()
{
  localStorage.clear();
  this._router.navigateByUrl("/login");    
}


}