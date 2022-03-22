import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';
import { ComponentlistComponent } from './componentlist/componentlist.component';
import { RendercomponentComponent } from './rendercomponent/rendercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    Sample1Component,
    Sample2Component,
    Sample3Component,
    ComponentlistComponent,
    RendercomponentComponent,
  ],
  imports: [BrowserModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

