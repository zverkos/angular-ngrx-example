import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { appReducers } from './shared/store/reducers';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { UserEffects } from './shared/store/effects/user.effects';
import { ConfigEffects } from './shared/store/effects/config.effects';
import { UserService } from './shared/sdk/services/user.service';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes  = [
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: '**',    redirectTo: '/users' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
