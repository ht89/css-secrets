import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CodingTipsComponent } from './coding-tips/coding-tips.component';
import { BordersComponent } from './borders/borders.component';
import { BackgroundsComponent } from './backgrounds/backgrounds.component';
import { InnerRoundingComponent } from './inner-rounding/inner-rounding.component';
import { StripedBackgroundsComponent } from './striped-backgrounds/striped-backgrounds.component';
import { ComplexBgPatternsComponent } from './complex-bg-patterns/complex-bg-patterns.component';
import { RandomBackgroundsComponent } from './random-backgrounds/random-backgrounds.component';
import { ImgBordersComponent } from './img-borders/img-borders.component';

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
    },
    {
        path: 'inner-rounding',
        component: InnerRoundingComponent
    },
    {
        path: 'striped-bg',
        component: StripedBackgroundsComponent
    },
    {
        path: 'complex-bg',
        component: ComplexBgPatternsComponent
    },
    {
        path: 'random-bg',
        component: RandomBackgroundsComponent
    },
    {
        path: 'img-border',
        component: ImgBordersComponent
    }
]

@NgModule({
    declarations: [
        AppComponent,
        CodingTipsComponent,
        BordersComponent,
        BackgroundsComponent,
        InnerRoundingComponent,
        StripedBackgroundsComponent,
        ComplexBgPatternsComponent,
        RandomBackgroundsComponent,
        ImgBordersComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
