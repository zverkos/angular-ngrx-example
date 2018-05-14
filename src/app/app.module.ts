import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { reducers } from './shared/reducers';
import { CounterPageComponent } from './counter/counter-page/counter-page.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const appRoutes: Routes  = [
  { path: 'counter', redirectTo: 'CounterPageComponent' },
  { path: '**', redirectTo: 'CounterPageComponent' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CounterModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 50 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
