import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnzenComponentsModule } from 'anzen-components';
import { ClampComponent } from './components/pages/clamp/clamp.component';
import { BlurComponent } from './components/pages/blur/blur.component';

@NgModule({
  declarations: [
    AppComponent,
    ClampComponent,
    BlurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnzenComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
