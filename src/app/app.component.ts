import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/Interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CovidIndia-Tracker';

    news: NewsModel[] = [{
      title: "title1",
      description: "decription1"
    },
    {
      title: "title1",
      description: "decription1"
   
    }]
   
    ngOnInit(){
      if(!localStorage.getItem('newsDetails'))
      localStorage.setItem('newsDetails',JSON.stringify(this.news));
    }
}
