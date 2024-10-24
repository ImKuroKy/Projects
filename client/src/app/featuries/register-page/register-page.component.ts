import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { ComparePasswordDirective } from '../../directives/compare-password.directive';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ComparePasswordDirective],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { name, email, password } = this.user;
      const requestData = { name, email, password };
      this.apiService.postData(requestData).subscribe({
        next: (response) => {
          this.router.navigate(['/auth/login']);
        },
        error: (error) => {
          console.error('Error registering user', error);
        },
      });
    }
  }
}
