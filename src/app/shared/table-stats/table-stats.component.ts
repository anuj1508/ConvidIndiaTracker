import { Component, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {StateDataModel, DistrictDataModel} from '../../Interface'
import { ApiService } from 'src/app/api.service';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-table-stats',
  templateUrl: './table-stats.component.html',
  styleUrls: ['./table-stats.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableStatsComponent implements OnInit {

  @Input() statesData: StateDataModel[];
  dataSource:any;

  constructor() { }  

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.dataSource = this.statesData;
  }

  columnsToDisplay = ['state', 'confirmed', 'active', 'recovered', 'deaths'];

  expandedElement: StateDataModel | null;    

  ngAfterViewInit() { this.dataSource.sort = this.sort; }
}


// const stateData : StateDataModel[]=[
// 		{
// 			active: "6229",
// 			confirmed: "7628",
// 			deaths: "323",
// 			recovered: "1076",
//       state: "Maharashtra",
//       districtData:[]
//     },
//     {
// 			active: "2656",
// 			confirmed: "3071",
// 			deaths: "133",
// 			recovered: "282",
//       state: "Gujarat",
//       districtData:[]
// 		},
// ];

// const sampleData : StateDataModel[] = 
//   [{
//     active: "6538",
//     recovered: "1188",
//     deaths: "342",
//     confirmed: "8068",
//     districtData: [{
//       active: "0",
//       confirmed: "1",
//       deaths: "0",
//       district: "Sindhudurg",
//       recovered: "1"
//     }, {
//       active: "42",
//       confirmed:"47" ,
//       deaths: "5",
//       district: "Solapur",
//       recovered: "0"
//     }],
//     state: "Maharashtra"
//   }, {
//     active: "2837",
//     recovered: "313",
//     deaths: "151",
//     confirmed: "3301",
//     districtData: [{
//       active: "4",
//       confirmed: "5",
//       deaths: "1",
//       district: "Valsad",
//       recovered: "0"
//     }],
//     state: "Gujarat"
//   }
// ]
