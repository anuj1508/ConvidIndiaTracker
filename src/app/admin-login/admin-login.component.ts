import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router:Router,private _snackBar: MatSnackBar) { }
  hide = true;
 
  ngOnInit(): void {
    if(localStorage.getItem('login')=='true'){
      this.router.navigate(['admin/dashboard']);
    }
  }
 
  hidepass(){
    this.hide = !this.hide;
  }
  
  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });
 
  onSubmit(){
    if(this.loginForm.get('username').value=='admin' && this.loginForm.get('password').value=='admin'){
        localStorage.setItem('login','true');
        this.router.navigate(['admin/dashboard']);
    }
    else{
      this._snackBar.open("Please enter correct credentials",null ,{
        duration: 2000,
      });
    }
    
  }

}
