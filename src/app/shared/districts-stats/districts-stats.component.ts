import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DistrictDataModel, StateDataModel } from 'src/app/Interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-districts-stats',
  templateUrl: './districts-stats.component.html',
  styleUrls: ['./districts-stats.component.scss']
})
export class DistrictsStatsComponent implements OnInit {

  @Input() DistrictData: DistrictDataModel[];
  dataSource:any;

  constructor() { }  

  @ViewChild(MatSort, { static: true }) sort: MatSort;


  ngOnInit(): void {
    this.dataSource = this.DistrictData;
    this.dataSource.sort = this.sort;
  }

  columnsToDisplay = ['district', 'confirmed', 'active', 'deaths', 'recovered'];
}
// const districtData : DistrictDataModel[]=[
//   {
//     active: "6229",
//     confirmed: "7628",
//     deaths: "323",
//     recovered: "1076",
//     district: "Maharashtra",
//   },
//   {
//     active: "2656",
//     confirmed: "3071",
//     deaths: "133",
//     recovered: "282",
//     district: "Gujarat",
//   },
// ];
