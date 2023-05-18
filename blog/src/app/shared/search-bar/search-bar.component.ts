import {Component, EventEmitter, OnInit, Output} from
    '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public filterText: string = '';

  @Output() name = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  sendFilter(): void {
    this.name.emit(this.filterText);
  }
}

