import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'ngx-particle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnzenComponentsModule } from 'anzen-components';
import { ClampComponent } from './components/pages/clamp/clamp.component';
import { BlurComponent } from './components/pages/blur/blur.component';
import { ParticlesComponent } from './components/pages/particles/particles.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ClampComponent,
    BlurComponent,
    ParticlesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnzenComponentsModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
