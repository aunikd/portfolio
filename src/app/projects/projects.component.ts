import { Component } from '@angular/core';

declare var createTree: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor() { }

  ngOnInit(): void {
    new createTree();
  }

}
