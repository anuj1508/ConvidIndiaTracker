import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsModel } from 'src/app/Interface';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  newsForm: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  newsDetail: NewsModel = {description:"", title:""}
  
  newsDetailsArray: NewsModel[] = [];
  
  constructor(private formBuilder: FormBuilder, private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();
    this.newsDetailsArray = JSON.parse(localStorage.getItem('newsDetails'));
    //this.setChangeValidate()
  }

  createForm() {
    this.newsForm = new FormGroup({
      newsTitle: new FormControl('',[Validators.required]),
      newsDescription: new FormControl('',[Validators.required, Validators.minLength(5)]),
    });
  }

  onSubmit(){
    this.newsDetail.title = this.newsForm.get('newsTitle').value;
    this.newsDetail.description = this.newsForm.get('newsDescription').value;
    this.newsDetailsArray.push(this.newsDetail);
    localStorage.setItem('newsDetails',JSON.stringify(this.newsDetailsArray));
    this.newsForm.reset();
    this.newsForm.markAsUntouched();
    this._snackBar.open("News Updated!",null ,{
      duration: 2000,
    });   
  }

  logout(){
    localStorage.setItem('login','false');
    this.router.navigate(['login']);
 
  }
}
