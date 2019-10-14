import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Summary',
  templateUrl: './Summary.component.html',
  styleUrls: ['./Summary.component.css']
})
export class SummaryComponent implements OnInit {

  summaries: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getSummary();
  }

  getSummary() {
      this.http.get('http://localhost:5000/api/weatherforecast').subscribe(response => {
          this.summaries = response;
      }, error => {
         console.log(error);
      });
  }
}
