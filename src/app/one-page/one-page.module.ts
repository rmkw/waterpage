import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnePageRoutingModule } from './one-page-routing.module';
import { CarouselImgeComponent } from './components/carousel-imge/carousel-imge.component';
import { OneMetricComponent } from './components/one-metric/one-metric.component';
import { TwoMetricComponent } from './components/two-metric/two-metric.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ThreeMetricComponent } from './components/three-metric/three-metric.component';
import { CardsComponent } from './components/cards/cards.component';



@NgModule({
  declarations: [
    CarouselImgeComponent,
    OneMetricComponent,
    TwoMetricComponent,
    MainPageComponent,
    ThreeMetricComponent,
    CardsComponent,

  ],
  imports: [
    CommonModule,
    OnePageRoutingModule
  ]
})
export class OnePageModule { }
