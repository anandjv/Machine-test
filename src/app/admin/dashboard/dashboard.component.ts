import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { post } from 'jquery';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  posts: any;
  name: string;
  id: number;
  Arr: any;
  title: string = '';
  titleFilter: string;
  arrayTitleFilter: string;
  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.posts = posts;
      this.Arr = posts;
      console.log(posts)
    });
  }

  rowsPerPage = 10;
  currentPage = 1;
  totalRows = 100;
  getCurrentPage(pageNumber) {
    this.currentPage = pageNumber;
  }
  triggerAction(returnValue) {
    // console.log(returnValue);
    // this.router.navigate(['admin/info']);
  }
  actionsList = [

    {
      actionName: 'detail',
      actionIcon: 'fas fa-chevron-circle-right'
    }]
  columns = [
    { prop: 'id', name: 'Id' },
    { prop: 'title', name: 'Title' },
    { prop: 'body', name: 'Body' },

  ];

  filterById(event) {
    this.id = event.target.value;
    // console.log(this.id)

    if (this.Arr.some((post) => post.id == this.id)) {
      // console.log(this.Arr[this.id - 1])
      this.posts = [this.Arr[this.id - 1]]
    }
    else if (!this.id) {
      this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(posts => {
        this.posts = posts;
        this.Arr = posts;
        // console.log(posts)
      });
    }
    else {

    }
  }
  filterByTitle() {
    this.titleFilter = this.title.replace(/\s/g, "");
    if (!this.titleFilter) {
      this.posts = this.Arr;
    }
    else {
      for (var i = 0; i <= this.Arr.length; i++) {
        this.arrayTitleFilter = this.Arr[i].title.replace(/\s/g, "")
        if (this.titleFilter == this.arrayTitleFilter) {
          this.posts = [this.Arr[i]]
          break;
        }
        else {
          this.posts = [];
        }
      }
    }

  }
}