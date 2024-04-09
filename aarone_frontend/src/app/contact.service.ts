import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IContact } from "./icontact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // private serviceBaseUrl: string = 'http://localhost:8000'
  private serviceBaseUrl: string = 'https://aaronenergyservices.azurewebsites.net'
  constructor(private httpClient: HttpClient) {}

  create(contactUs: IContact): Observable<any> {
    return this.httpClient.post(`${this.serviceBaseUrl}/api/contacts/`,{
      name: contactUs.name,
      email: contactUs.email,
      query: contactUs.query
    })
  }
}