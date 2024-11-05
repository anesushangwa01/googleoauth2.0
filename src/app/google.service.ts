import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoogleSigninService {
  private apiUrl = 'https://googleoauth2.onrender.com/auth';

  constructor(private http: HttpClient, private router: Router) {}

  // Method to initiate Google login
  loginWithGoogle() {
    window.open(`${this.apiUrl}/google`, '_self');
  }

  // Method to get authenticated user details
  getUser() {
    return this.http.get(`${this.apiUrl}/user`, { withCredentials: true }); // Enable credentials to send cookies
  }

  logout() {
    return this.http.get(`${this.apiUrl}/logout`, { withCredentials: true }).subscribe(() => {
      // Redirect to login or home page after logout
      this.router.navigate(['/login']);
    });
  }
}
