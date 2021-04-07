import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url  = "./assets/dataStorage/projectData.json" 

  constructor(private http : HttpClient) { }
  
  getEmployees() {
    return this.http.get(this.url)
  }
  
  showAlert(){
    alert('Hello World')
  }

}
