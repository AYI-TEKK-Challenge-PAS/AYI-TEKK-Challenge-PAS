import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {CarouselAllModule} from "@syncfusion/ej2-angular-navigations";
import {NavComponent} from "./nav/nav.component";
import {TranscriptionComponent} from "./transcription/transcription.component";
import {TraductionComponent} from "./traduction/traduction.component";
import {ExtractionComponent} from "./extraction/extraction.component";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        TranscriptionComponent,
        TraductionComponent,
        ExtractionComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbCarouselModule,
    CarouselAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
