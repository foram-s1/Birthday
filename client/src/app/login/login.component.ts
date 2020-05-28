import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  credentials: TokenPayload={
    _id:'',
    email:'',
    password:''
  }

  constructor(private auth:AuthenticationService, private router: Router, private toastr: ToastrService) { }

  
  login(){
    this.auth.login(this.credentials).subscribe(
      ()=>{
        this.router.navigateByUrl('/bdays')
      },
      err => {
        this.toastr.error('Invalid Details')
        console.error(err)
      }
    )
  }
}
