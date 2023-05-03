import { Component,DoCheck, OnInit,AfterViewInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AdminupdatepopupComponent } from '../adminupdatepopup/adminupdatepopup.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements DoCheck,OnInit,AfterViewInit {
  res:any;
  userlist:any;
    displayedColumns: string[] = ['id','name', 'select', 'subject','status','action'];
    dataSource!: MatTableDataSource<any>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    ismenurequired=false;
    isMenuVisible=false;
    isadmin=false;
    constructor(private route:Router,private service:AuthService,private dialog: MatDialog,private toastr:ToastrService){
      let role=sessionStorage.getItem('role');
      if(role=='admin'){
        this.isadmin=true;
      }
    }
    ngOnInit(): void {
      this.getAllTickets();
      this.getStatus();
    }
    ngDoCheck(): void {
      let currentroute = this.route.url;
      let role=sessionStorage.getItem('role');
      if (currentroute == '/user' || currentroute == '/register') {
        this.isMenuVisible = false
      } else {
        this.isMenuVisible = true
      }
  
      if (role == 'admin') {
        this.isadmin = true;
      }else{
        this.isadmin = false;
      }
    }
    // LoadUser() {
    //   this.service.Getall().subscribe(res => {
    //     this.userlist = res;
    //     this.dataSource = new MatTableDataSource(this.userlist);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   });
    // }
    public dataticket:any
    getAllTickets(){
      this.service.getTicket()
      .subscribe(res=>{
        this.dataticket=res;
        this.dataSource=new MatTableDataSource(res);  
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },
      err=>{
        alert("Error");
      })
    }
    ngAfterViewInit():void {
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  
    updateTicket(code: any) {
      this.OpenDialog('1000ms', '600ms', code);
    }
  
    OpenDialog(enteranimation: any, exitanimation: any, code: string) {
      const popup = this.dialog.open(AdminupdatepopupComponent, {
        enterAnimationDuration: enteranimation,
        exitAnimationDuration: exitanimation,
        width: '30%',
        data: {
          usercode: code
        }
      });
      popup.afterClosed().subscribe(res => {
        this.getAllTickets();
      });
    }
major=0
open =0
close =0
  getStatus(){
    this.service.getTicket().subscribe(res=>{
      res.filter((i:any)=>{
        i.select;
        if(i.select=="Major issue"){
          this.major+=1;
        }
        if(i.isactive){
          this.close+=1
        }
        else{
          this.open+=1
        }
      })
      this.toastr.error("There are"+this.major+"High Priority Tasks");
    })
  }

}
