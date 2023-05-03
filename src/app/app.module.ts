import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { NgxOtpInputModule } from 'ngx-otp-input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import{MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { RaiseticketComponent } from './raiseticket/raiseticket.component';
import { CommentpopupComponent } from './commentpopup/commentpopup.component';
import { AdminupdatepopupComponent } from './adminupdatepopup/adminupdatepopup.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    DashboardComponent,
    AdmindashboardComponent,
    UpdatepopupComponent,
    RaiseticketComponent,
    CommentpopupComponent,
    AdminupdatepopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxOtpInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    FormsModule,MatDatepickerModule,
    MatNativeDateModule,MatRadioModule,MatButtonModule,
    MatInputModule,
    ToastrModule.forRoot({
      preventDuplicates:true
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
