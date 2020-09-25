import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-eelement',
  templateUrl: './server-eelement.component.html',
  styleUrls: ['./server-eelement.component.css']
})
export class ServerEelementComponent implements OnInit, OnChanges {

  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { 
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called',changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called')
  }

}
