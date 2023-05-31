import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import {defaultSong, Song} from "../models/song";
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[updateAuth]'
})
export class UpdateAuthDirective implements OnInit {
  @Input('updateAuth') userId: any; // Przyjęcie danych wejściowych

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (!this.authService.isLoggedIn() || this.userId !== this.authService.getUserId()) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
