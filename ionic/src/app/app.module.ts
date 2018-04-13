import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SearchPage } from '../pages/search/search';
import { SignupPage } from '../pages/signup/signup';
import { TestingPage } from '../pages/testing/testing';
import { SuccessPage } from '../pages/success/success';
import { ViewProfilePage } from '../pages/view-profile/view-profile';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SearchresultsPage } from '../pages/searchresults/searchresults';
import { SettingsPage} from '../pages/settings/settings';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { TestSuiteProvider } from '../providers/test-suite/test-suite';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SearchPage,
    SignupPage,
    SuccessPage,
    SearchresultsPage,
    SettingsPage,
    HomePage,
    TestingPage,
    UserProfilePage,
    ViewProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SearchPage,
    SignupPage,
    SuccessPage,
    SearchresultsPage,
    SettingsPage,
    HomePage,
    TestingPage,
    UserProfilePage,
    ViewProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    TestSuiteProvider,

  ]
})
export class AppModule {}
