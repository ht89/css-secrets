import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CodingTipsComponent } from './coding-tips/coding-tips.component';
import { BordersComponent } from './borders/borders.component';

const ROUTES: Routes = [
    {
        path: 'coding-tips',
        component: CodingTipsComponent
    },
    {
        path: 'borders',
        component: BordersComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    CodingTipsComponent,
    BordersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
