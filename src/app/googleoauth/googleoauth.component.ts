import { Component } from '@angular/core';
import  {GoogleSigninService} from '../google.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-googleoauth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './googleoauth.component.html',
  styleUrl: './googleoauth.component.css'
})
export class GoogleoauthComponent {



  constructor(private googleSigninService: GoogleSigninService) { }

  login() {
    this. googleSigninService.loginWithGoogle();
  }


  user: any;



  ngOnInit() {
    this.googleSigninService.getUser().subscribe(data => {
      this.user = data;
    });
  }

  logout() {
    this.googleSigninService.logout();
  }
}



