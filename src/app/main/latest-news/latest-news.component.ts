import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/Interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// export interface Hero {
//   id: number;
//   name: string;
// }

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  newsArray : NewsModel[]=[]
 
  ngOnInit(): void {
    this.newsArray = JSON.parse(localStorage.getItem('newsDetails'));
 
  }
  
}
