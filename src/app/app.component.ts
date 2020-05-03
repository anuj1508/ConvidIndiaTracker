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
      title: "Coronavirus Update 1",
      description: "4 recoveries in Punjab"
    },
    {
      title: "Coronavirus Update 2",
      description: "29 new cases in Rajasthan, 1 new case in Ladakh"
   
    }]
   
    ngOnInit(){
      if(!localStorage.getItem('newsDetails'))
      localStorage.setItem('newsDetails',JSON.stringify(this.news));
    }
}
