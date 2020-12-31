import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProducListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ConvertToSpacePipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProducListComponent,
    ConvertToSpacePipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
