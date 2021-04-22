import { Component, OnInit } from '@angular/core';

declare let ga: Function;
@Component({
  selector: 'codeexamples',
  templateUrl: './codeexamples.component.html',
  styleUrls: ['./codeexamples.component.css']
})
export class CodeexamplesComponent implements OnInit {

  constructor() {
    ga('set', 'page', 'CodeExamples');
    ga('send', 'pageview');
   }

  ngOnInit(): void {
  }

}
