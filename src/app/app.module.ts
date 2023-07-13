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
import { FlexibleEllipsesComponent } from './flexible-ellipses/flexible-ellipses.component';
import { ParallelogramsComponent } from './parallelograms/parallelograms.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { VisualEffectsComponent } from './visual-effects/visual-effects.component';
import { ColorTintingComponent } from './color-tinting/color-tinting.component';
import { FrostedGlassComponent } from './frosted-glass/frosted-glass.component';
import { FoldedCornerComponent } from './folded-corner/folded-corner.component';
import { TypographyComponent } from './typography/typography.component';
import { TextEffectsComponent } from './text-effects/text-effects.component';
import { UserExperienceComponent } from './user-experience/user-experience.component';
import { StructureAndLayoutComponent } from './structure-and-layout/structure-and-layout.component';
import { StickyFooterComponent } from './sticky-footer/sticky-footer.component';
import { AnimationsComponent } from './animations/animations.component';

const ROUTES: Routes = [
  {
    path: 'coding-tips',
    component: CodingTipsComponent,
  },
  {
    path: 'borders',
    component: BordersComponent,
  },
  {
    path: 'backgrounds',
    component: BackgroundsComponent,
  },
  {
    path: 'inner-rounding',
    component: InnerRoundingComponent,
  },
  {
    path: 'striped-bg',
    component: StripedBackgroundsComponent,
  },
  {
    path: 'complex-bg',
    component: ComplexBgPatternsComponent,
  },
  {
    path: 'random-bg',
    component: RandomBackgroundsComponent,
  },
  {
    path: 'img-border',
    component: ImgBordersComponent,
  },
  {
    path: 'flexible-ellipses',
    component: FlexibleEllipsesComponent,
  },
  {
    path: 'parallelograms',
    component: ParallelogramsComponent,
  },
  {
    path: 'pie-chart',
    component: PieChartComponent,
  },
  {
    path: 'visual-effects',
    component: VisualEffectsComponent,
  },
  {
    path: 'color-tinting',
    component: ColorTintingComponent,
  },
  {
    path: 'frosted-glass',
    component: FrostedGlassComponent,
  },
  {
    path: 'folded-corner',
    component: FoldedCornerComponent,
  },
  {
    path: 'typography',
    component: TypographyComponent,
  },
  {
    path: 'text-effects',
    component: TextEffectsComponent,
  },
  {
    path: 'user-experience',
    component: UserExperienceComponent,
  },
  {
    path: 'structure-and-layout',
    component: StructureAndLayoutComponent,
  },
  {
    path: 'sticky-footer',
    component: StickyFooterComponent,
  },
  {
    path: 'animations',
    component: AnimationsComponent,
  },
];

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
    ImgBordersComponent,
    FlexibleEllipsesComponent,
    ParallelogramsComponent,
    PieChartComponent,
    VisualEffectsComponent,
    ColorTintingComponent,
    FrostedGlassComponent,
    FoldedCornerComponent,
    TypographyComponent,
    TextEffectsComponent,
    UserExperienceComponent,
    StructureAndLayoutComponent,
    StickyFooterComponent,
    AnimationsComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
