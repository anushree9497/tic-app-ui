import { Component , OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit  {

    constructor(private authService: AuthService, private activateRoute: ActivatedRoute, private router: Router){
      this.getAuthorizationCode();
    }

    ngOnInit() {
      alert("fgf")
      this.authService.getToken().pipe(take(1)).subscribe((tokens) => {
        if((tokens as any)?.id_token){
            sessionStorage.setItem('id_token', (tokens as any).id_token);
            sessionStorage.setItem('refresh_token', (tokens as any).refresh_token);
            this.router.navigate(['/dashboard']);
          }
        });
    }

    getAuthorizationCode() {
        alert("saved")
        this.activateRoute.queryParams.subscribe((params) => {
          if(params?.['code']){
            this.authService.code = params['code'];
          }
        })
      }

}
