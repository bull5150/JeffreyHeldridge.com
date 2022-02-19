import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GooglemapComponent } from './components/codeexamples/examples/googlemap/googlemap.component';
import { AboutComponent } from './components/about/about.component';
import { TwitterComponent } from './components/codeexamples/examples/twitter/twitter.component';
import { GamesComponent } from './components/codeexamples/examples/games/games.component';
import { SnakeComponent } from './components/codeexamples/examples/games/games/snake/snake.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TetrisComponent } from './components/codeexamples/examples/games/games/tetris/tetris.component';
import { BlogComponent } from './components/codeexamples/examples/blog/blog.component';
import { CodeexamplesComponent } from './components/codeexamples/codeexamples.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BlogreadComponent } from './components/blogread/blogread.component';
import { PolygonioComponent } from './components/codeexamples/examples/polygonio/polygonio.component';
import { AngularformsComponent } from './components/codeexamples/examples/angularforms/angularforms.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', component: WelcomeComponent },
  { path: 'contact', component: ContactmeComponent },
  { path: 'examples', component: CodeexamplesComponent },
  { path: 'google', component: GooglemapComponent },
  { path: 'poly', component: PolygonioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blogread', component: BlogreadComponent },
  { path: 'twitter/:userid', component: TwitterComponent },
  { path: 'twitter', component: TwitterComponent },
  { path: 'games', component: GamesComponent },
  { path: 'snake', component: SnakeComponent },
  { path: 'tetris', component: TetrisComponent },
  { path: 'angularforms', component: AngularformsComponent},
  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes, {
    useHash: true,
    relativeLinkResolution: 'legacy'
})
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{}