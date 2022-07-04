import { Component } from '@angular/core';
export interface PeriodicElement {
  heading: string;
  position: number;
  input: string;
  card: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, heading: 'Primary Heading', input: 'input', card: 'image', actions: 'edit'},
  {position: 2, heading: 'Secondary Heading', input: 'checkbox', card: 'no-image', actions: 'add'},
 
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'test';
  className: string = ''
  mainTheam = '';
  subTheam = '';
  displayedColumns: string[] = ['position', 'heading', 'input', 'card','actions'];
  dataSource = ELEMENT_DATA;

  radioChange(value: any) {
    console.log(value);
    this.mainTheam = value;
    if(this.mainTheam !== '') {
      this.className = this.mainTheam +"-"+ this.subTheam;
    }
  }

  valueChange(value: any) {
    this.subTheam = value;
    if(this.mainTheam !== '') {
      this.className = this.mainTheam +"-"+ this.subTheam;
    }

  }
}

