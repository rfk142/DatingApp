import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SummaryComponent } from './Summary/Summary.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
   declarations: [
      AppComponent,
      SummaryComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
