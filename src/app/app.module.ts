import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProducListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProducListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
