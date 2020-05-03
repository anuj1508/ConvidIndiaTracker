import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precautions',
  templateUrl: './precautions.component.html',
  styleUrls: ['./precautions.component.scss']
})
export class PrecautionsComponent implements OnInit {

  constructor() { }
  precautionsArray:string[] = ['Hi this is me'];

  ngOnInit(): void {
  }

}
