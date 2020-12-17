import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GooglemapComponent } from './components/googlemap/googlemap.component';
import { AboutComponent } from './components/about/about.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { FormemailComponent } from './components/formemail/formemail.component';
import { GamesComponent } from './components/games/games.component';
import { SnakeComponent } from './components/games/games/snake/snake.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TetrisComponent } from './components/games/games/tetris/tetris.component';
import { BlogComponent } from './components/blog/blog.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'google', component: GooglemapComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'twitter', component: TwitterComponent },
  { path: 'email', component: FormemailComponent },
  { path: 'games', component: GamesComponent },
  { path: 'snake', component: SnakeComponent },
  { path: 'tetris', component: TetrisComponent },
  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes, {
        useHash: true
    })
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{}