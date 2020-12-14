import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NguiMapModule, NguiMapComponent} from '@ngui/map';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app.routing';

import { ChartapiService } from './services/chartapi.service';
import { BlogapiService } from './services/blogapi.service';
import { GooglemarkerapiService } from './services/googlemarkerapi.service';
import { EmailapiService } from './services/emailapi.service';
import { SnakeScore } from './services/snake-score.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GooglemapComponent } from './components/googlemap/googlemap.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { GooglemapOverlayComponent } from './components/overlays/googlemap-overlay/googlemap-overlay.component';
import { AboutOverlayComponent } from './components/overlays/about-overlay/about-overlay.component';
import { BlogOverlayComponent } from './components/overlays/blog-overlay/blog-overlay.component';
import { TwitterOverlayComponent } from './components/overlays/twitter-overlay/twitter-overlay.component';
import { FormemailComponent } from './components/formemail/formemail.component';
import { EmailOverlayComponent } from './components/overlays/email-overlay/email-overlay.component';
import { FooterComponent } from './components/footer/footer.component';
import { GamesComponent } from './components/games/games.component';
import { SnakeComponent } from './components/games/games/snake/snake.component';
import { GamesOverlayComponent } from './components/overlays/games-overlay/games-overlay.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TetrisComponent } from './components/games/games/tetris/tetris.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GooglemapComponent,
    BlogComponent,
    AboutComponent,
    TwitterComponent,
    WelcomeComponent,
    HeaderComponent,
    GooglemapOverlayComponent,
    AboutOverlayComponent,
    BlogOverlayComponent,
    TwitterOverlayComponent,
    FormemailComponent,
    EmailOverlayComponent,
    FooterComponent,
    GamesComponent,
    SnakeComponent,
    GamesOverlayComponent,
    PagenotfoundComponent,
    TetrisComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=Your Key Here&libraries=drawing'}),
  ],
  providers: [NguiMapComponent, ChartapiService, BlogapiService, GooglemarkerapiService, EmailapiService, SnakeScore],
  bootstrap: [AppComponent]
})
export class AppModule { }
