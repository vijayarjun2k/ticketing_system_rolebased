import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from "rxjs";

import { FormsModule } from '@angular/forms';





@Component({
  selector: 'app-raiseticket',
  templateUrl: './raiseticket.component.html',
  styleUrls: ['./raiseticket.component.css'],
  providers: [],
})


export class RaiseticketComponent {
  
  constructor(private builder:FormBuilder ,private service:AuthService, private router:Router,private toastr:ToastrService) {
    
	
    sessionStorage.clear();
  }

  result: any;

  ticketform = this.builder.group({
    name: this.builder.control('', Validators.required),
    subject: this.builder.control('', Validators.required),
    select: this.builder.control('', Validators.required),
    brief: this.builder.control('', Validators.required),
    file: this.builder.control('', Validators.required),
   // date: this.builder.control('', Validators.required),
    comment: this.builder.control('')
  });

  raiseticket() {
    if (this.ticketform.valid) {
     this.service.postTicket(this.ticketform.value)
     .subscribe(res=>{
      console.log(res);
      this.toastr.success("Ticket added successfully");
     }, err => {
      this.toastr.error("Error while raising ticket");
     })
} 
}
}