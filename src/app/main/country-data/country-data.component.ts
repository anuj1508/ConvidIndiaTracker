import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { CountryDataModel, StateDataModel } from 'src/app/Interface';

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CountryDataComponent implements OnInit {

  dataSource:any;

  date:string;

  Data:CountryDataModel={active:'', recovered:'', deaths:'', confirmed:'', statesData:[], lastupdatedtime:new Date()};

  statesData: StateDataModel[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getStats();
  }

  getStats(){
    this.apiService.getStats().subscribe(data=>{
        this.dataSource=data;
        var today = new Date(this.dataSource.lastupdatedtime);
        this.date = today.toString();
        //this.statesData = this.dataSource;
     });
     
  }

}
