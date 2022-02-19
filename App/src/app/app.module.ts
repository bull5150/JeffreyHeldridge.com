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
import { PolygonIOService } from './services/polygon-io.service';

import { AppComponent } from './app.component';
import { GooglemapComponent } from './components/codeexamples/examples/googlemap/googlemap.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/codeexamples/examples/blog/blog.component';
import { TwitterComponent } from './components/codeexamples/examples/twitter/twitter.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { GooglemapOverlayComponent } from './components/codeexamples/examples/googlemap/overlay/googlemap-overlay.component';
import { BlogOverlayComponent } from './components/codeexamples/examples/blog/overlay/blog-overlay.component';
import { TwitterOverlayComponent } from './components/codeexamples/examples/twitter/overlay/twitter-overlay.component';
import { FooterComponent } from './components/footer/footer.component';
import { GamesComponent } from './components/codeexamples/examples/games/games.component';
import { SnakeComponent } from './components/codeexamples/examples/games/games/snake/snake.component';
import { GamesOverlayComponent } from './components/codeexamples/examples/games/overlay/games-overlay.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TetrisComponent } from './components/codeexamples/examples/games/games/tetris/tetris.component';
import { CodeexamplesComponent } from './components/codeexamples/codeexamples.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BlogreadComponent } from './components/blogread/blogread.component';
import { PolygonioComponent } from './components/codeexamples/examples/polygonio/polygonio.component';
import { PolygonOverlayComponent } from './components/codeexamples/examples/polygonio/overlay/polygon-overlay.component';
import { AngularformsComponent } from './components/codeexamples/examples/angularforms/angularforms.component';
import { AngularformsOverlayComponent } from './components/codeexamples/examples/angularforms/overlay/angularforms-overlay.component';


@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent,
    BlogComponent,
    AboutComponent,
    TwitterComponent,
    WelcomeComponent,
    HeaderComponent,
    GooglemapOverlayComponent,
    BlogOverlayComponent,
    TwitterOverlayComponent,
    FooterComponent,
    GamesComponent,
    SnakeComponent,
    GamesOverlayComponent,
    PagenotfoundComponent,
    TetrisComponent,
    CodeexamplesComponent,
    ContactmeComponent,
    NavigationComponent,
    BlogreadComponent,
    PolygonioComponent,
    PolygonOverlayComponent,
    AngularformsComponent,
    AngularformsOverlayComponent,
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
  providers: [
    NguiMapComponent
    ,ChartapiService
    ,BlogapiService
    ,GooglemarkerapiService
    ,EmailapiService
    ,SnakeScore
    ,PolygonIOService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
