import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import {AuthService} from "./services/auth.service";
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './services/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddSongComponent } from './components/add-song/add-song.component';
import { YourMusicComponent } from './components/your-music/your-music.component';
import { MusicOfOthersComponent } from './components/music-of-others/music-of-others.component';
import { FormCheckDirective } from './directives/form-check.directive';
import { SongItemComponent } from './components/song-item/song-item.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';
import { UpdateSongComponent } from './components/update-song/update-song.component';
import { UpdateAuthDirective } from './directives/update-auth.directive';
import { ExpandTextPipe } from './pipes/expand-text.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { RoundNumberPipe } from './pipes/round-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AddSongComponent,
    YourMusicComponent,
    MusicOfOthersComponent,
    FormCheckDirective,
    SongItemComponent,
    SongDetailsComponent,
    UpdateSongComponent,
    UpdateAuthDirective,
    ExpandTextPipe,
    RoundNumberPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    DataService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
