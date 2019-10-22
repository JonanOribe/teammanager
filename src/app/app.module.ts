import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'

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

import {TasksComponent} from './components/tasks/tasks.component';
import {TaskListComponent} from './components/tasks/task-list/task-list.component';
import {TaskComponent} from './components/tasks/task/task.component';

//Services
import {ProductService} from './services/product.service'
import {TaskService} from './services/task.service'

import{FormsModule} from '@angular/forms'

@NgModule({
  declarations: [AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    TasksComponent,
    TaskListComponent,
    TaskComponent
],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ProductService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
