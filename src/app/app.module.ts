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

import { ChartsModule } from 'ng2-charts';

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

import {ComboBox}  from './components/combo-box/combo-box.component';

import {CalendarComponent}  from './components/calendar/calendar.component';
import {PieChartComponent}  from './components/pie-chart/pie-chart.component';

//Services
import {ProductService} from './services/product.service'
import {TaskService} from './services/task.service'

import{FormsModule} from '@angular/forms'

import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    TasksComponent,
    TaskListComponent,
    TaskComponent,
    ComboBox,
    CalendarComponent,
    PieChartComponent
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
    ToastrModule.forRoot(),
    MatSliderModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ChartsModule
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
