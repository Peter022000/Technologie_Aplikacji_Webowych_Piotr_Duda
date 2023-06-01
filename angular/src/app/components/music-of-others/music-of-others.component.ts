import { Component } from '@angular/core';
import {Song} from "../../models/song";
import {DataService} from "../../services/data.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'music-of-others',
  templateUrl: './music-of-others.component.html',
  styleUrls: ['./music-of-others.component.css']
})
export class MusicOfOthersComponent {
  public items$: Song[] = [];

  constructor(private service: DataService, private authService: AuthService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response as Song[];
    });
  }
}
