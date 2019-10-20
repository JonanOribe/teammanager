import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Firebase
import {AngularFireDatabaseModule} from'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment'

//Component
import {ProductsComponent} from './components/products/products.component';
import {ProductListComponent} from './components/products/product-list/product-list.component';
import {ProductComponent} from './components/products/product/product.component';

//Services
import {ProductService} from './services/product.service'

import{FormsModule} from '@angular/forms'

@NgModule({
  declarations: [AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent
],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
