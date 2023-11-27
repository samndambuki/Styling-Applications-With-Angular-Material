import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { DemoModule } from './demo/demo.module';

const routes: Routes = [
  //apply lazy loading for our demo module
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule),
  },
  //add a catch all routes that will redirect to the module
  { path: '**', redirectTo: 'demo' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    //enables angular animations system
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
