import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { counter } from "./counter/counter.reducer";
import { CounterPageComponent } from './counter/counter-page/counter-page.component';

import { StoreModule } from '@ngrx/store';
import { AppState, InternalStateType } from './app.service';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const appRoutes: Routes  = [
  { path: 'counter', redirectTo: 'CounterPageComponent' },
  { path: '**', redirectTo: 'CounterPageComponent' }
];

const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CounterModule,
    StoreModule.forRoot({ counter }),
    StoreDevtoolsModule.instrument({ maxAge: 50 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
