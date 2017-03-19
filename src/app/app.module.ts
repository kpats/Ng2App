import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AlertModule } from 'ng2-bootstrap/alert';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { AngularFireModule, AuthMethods, AuthProviders } from "angularfire2";
import { AgGridModule } from "ag-grid-angular/main";

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
  //,
  // { path: '', component: AppComponent }
];

const firebaseConfig = {
  apiKey: "AIzaSyD14MHKxuM2tE6LA_ZBpLcrP4bwFVOKTOk",
  authDomain: "myfirstproject-74ee5.firebaseapp.com",
  databaseURL: "https://myfirstproject-74ee5.firebaseio.com",
  storageBucket: "myfirstproject-74ee5.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent, LoginComponent, DashboardComponent, AdminComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }),
     AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
