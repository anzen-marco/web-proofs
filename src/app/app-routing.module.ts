import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClampComponent } from './components/pages/clamp/clamp.component';
import { BlurComponent } from './components/pages/blur/blur.component';
import { ParticlesComponent } from './components/pages/particles/particles.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/clamp',
    pathMatch: 'full'
  },
  {
    path: 'clamp',
    component: ClampComponent,
  },
  {
    path: 'blur',
    component: BlurComponent,
  },
  {
    path: 'particles',
    component: ParticlesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
