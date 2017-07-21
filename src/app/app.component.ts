import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  table_data = [   { first_name : 'Rose',
                     last_name  : 'Tyler',
                     home       : 'Earth' },
                   { first_name : 'Zoe',
                     last_name  : 'Heriot',
                     home       : 'Space Station W3'},
                   { first_name : 'Jo',
                     last_name  : 'Grant',
                     home       : 'Earth'},
                   { first_name : 'Leela',
                     last_name  : null,
                     home       : 'Unspecified'},
                   { first_name : 'Romana',
                     last_name  : null,
                     home       : 'Gallifrey'},
                   { first_name : 'Clara',
                     last_name  : 'Oswald',
                     home       : 'Earth'},
                   { first_name : 'Adric',
                     last_name  : null,
                     home       : 'Alzarius'},
                   { first_name : 'Susan',
                     last_name  : 'Foreman',
                     home       : 'Gallifrey'} ] ;		   


//Below are Functions that actually sort first_name, last_name, and home into arrays
//I was able to display them on the table, but only in one long row, as opposed to how it's supposedd to be. 

  /*getFirstNames():String[] {
  	return [].concat.apply([],this.table_data.map(data => data.first_name))
  }

  getLastNames():String[] {
  	return [].concat.apply([],this.table_data.map(data => data.last_name))
  }

  getHome():String[] {
  	return [].concat.apply([],this.table_data.map(data => data.home))
  }*/


}
