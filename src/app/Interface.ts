import { MatTableDataSource } from '@angular/material/table';

export interface StateDataModel {
    active: string;
    confirmed: string;
    deaths: string;
    recovered: string;
    state: string;
    districtData: DistrictDataModel[] | MatTableDataSource<DistrictDataModel>;
    lastupdatedtime:Date;
  }


  export interface DistrictDataModel {
    active: string;
    confirmed: string;
    deaths: string;
    recovered: string;
    district: string;
  }

  export interface CountryDataModel {
    active: string;
    confirmed: string;
    deaths: string;
    recovered: string;  
    statesData: StateDataModel[];
    lastupdatedtime: Date;
  }

  export interface NewsModel {
    title: string;
    description: string;
  }

  