import { Component, OnInit } from '@angular/core';
import { data1 } from '../data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  issuedAtFrom = '';
  issuedAtTo = '';
  updatedAtFrom = '';
  updatedAtTo = ''
  categ = '';

  // datasource = '';
  filteredData = [];
  displayedColumns = ['author', 'company', 'issuedDate', 'updatedDate','edit', 'delete'];
  // dataSource = data;
  Search() {
    this.filteredData = data1.filter(v => v.category == this.categ && this.strtodate(v.issuedDate) > this.strtodate(this.issuedAtFrom) && this.strtodate(v.issuedDate) < this.strtodate(this.issuedAtTo) && this.strtodate(v.updatedDate) > this.strtodate(this.updatedAtFrom) && this.strtodate(v.updatedDate) < this.strtodate(this.updatedAtTo));
    // this.filteredData = data1.filter(v=> v.category == this.categ)
    // console.log(this.issuedAtFrom);
    // console.log(data1[1].issuedDate);
  } 
  // Search() {
  //     // this.filteredData = data1.filter(v => v.issuedDate > 'Hy' );
  //     this.filteredData = data1.filter(v => v.issuedDate > this.issuedAtFrom && v.issuedDate < this.issuedAtTo && v.updatedDate > this.updatedAtFrom && v.updatedDate < this.updatedAtTo)
  //     // console.log(data1.issuedDate);
  //     this.filteredData=data1;
  //     console.log(this.filteredData);
  // }

  ngOnInit() {
    this.filteredData = [];
    console.log(this.filteredData);
  }

  strtodate(d) {
    return new Date(d);
  }
  
  
    
  
  
  
  clearRow1() {
    this.issuedAtFrom = '';
    this.issuedAtTo = '';
  }
  clearRow2() {
    this.updatedAtFrom = '';
    this.updatedAtTo = '';
  }
}
