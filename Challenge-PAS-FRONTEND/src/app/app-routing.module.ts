import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TranscriptionComponent} from "./transcription/transcription.component";
import {TraductionComponent} from "./traduction/traduction.component";
import {ExtractionComponent} from "./extraction/extraction.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Consultation', component: TranscriptionComponent},
  {path: 'traduction', component: TraductionComponent},
  {path: 'extraction', component: ExtractionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
