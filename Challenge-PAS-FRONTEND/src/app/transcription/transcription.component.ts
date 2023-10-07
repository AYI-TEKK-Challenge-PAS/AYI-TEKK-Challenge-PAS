import {Component, OnInit} from '@angular/core';
import {SpeechToTextService} from "../services/speech-to-text.service";

@Component({
  selector: 'app-transcription',
  templateUrl: './transcription.component.html',
  styleUrls: ['./transcription.component.scss']
})
export class TranscriptionComponent {

  record:boolean=false;
  transcript: boolean=false;
  transcriptionResult:any;
  traductionResult:any;
  extractionResult:any;
  extract: boolean = false;

  constructor(private speechToText:SpeechToTextService) {}

  public ngOnInit(): void {}

  recording(){
    this.extract = false;
    this.traductionResult = null;
    this.record=true;
    this.transcriptionResult=null
    this.enregistrer();
  }

  enregistrer(){
    this.speechToText.enregistrement().subscribe(data => {
      this.record=false;
      this.transcript=true;
      this.transcription();
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  transcription(){
    this.speechToText.transcription().subscribe(transcription => {
      this.transcriptionResult = transcription;

      this.speechToText.traduction(this.transcriptionResult).subscribe(traduction=> {
        this.traductionResult = traduction;
        this.transcript = false;
      }, err => {
      console.log(err);
    });

    }, err => {
      console.log(err);
    });
  }

  extraction(texte:any){
    this.speechToText.extraction(texte).subscribe(extraction=>{
      this.extract = true
      this.extractionResult = extraction;
      console.log(extraction)
    }, err => {
      console.log(err);
    });
  }

  ////////////


}
