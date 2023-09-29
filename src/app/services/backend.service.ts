import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class BackendService {

  baseUrl = "http://localhost:9000/demo"

  constructor(private httpService: HttpService, private authService:AuthService, private http: HttpClient) {
      this.getDemoInformation()
  }


  getDemoInformation(){
    this.httpService.doGet(this.baseUrl, this.authService.getOptions()).subscribe((content) => {
      console.log(content);
      //this.demoContent = content;
      //       (this.demoContent as any) = content;
    })
  }
}
