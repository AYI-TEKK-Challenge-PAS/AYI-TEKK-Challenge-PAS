import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const hostname = "http://localhost:8000"

@Injectable({
  providedIn: 'root'
})
export class SpeechToTextService {

  constructor(private httpClient: HttpClient) { }

  // Permet de transcrir l'audio enregistrer
  transcription() {
    return this.httpClient.get(hostname+'/transcription');
  }

  // Permet de faire l'enregistrement
  enregistrement() {
    return this.httpClient.post(hostname + '/enregistrement',null);
  }

  // Permet de faire l'enregistrement
  traduction(texte:string) {
    return this.httpClient.get(hostname + '/traduction/'+texte);
  }

  // Permet de faire l'enregistrement
  extraction(texte:any) {
    return this.httpClient.get(hostname + '/extract/'+texte);
  }
}
