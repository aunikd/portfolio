import { Component, OnInit  } from '@angular/core';

declare var createTree: any;

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new createTree();
  }

}
