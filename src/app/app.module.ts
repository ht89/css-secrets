import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CodingTipsComponent } from './coding-tips/coding-tips.component';
import { BordersComponent } from './borders/borders.component';
import { BackgroundsComponent } from './backgrounds/backgrounds.component';

const ROUTES: Routes = [
    {
        path: 'coding-tips',
        component: CodingTipsComponent
    },
    {
        path: 'borders',
        component: BordersComponent
    },
    {
        path: 'backgrounds',
        component: BackgroundsComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    CodingTipsComponent,
    BordersComponent,
    BackgroundsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
