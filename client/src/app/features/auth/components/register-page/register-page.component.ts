import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../../services/api.service';
import { ComparePasswordDirective } from '../../../../directives/compare-password.directive';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ComparePasswordDirective],
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
      this.apiService.register(requestData).subscribe({
        next: (response) => {
          this.router.navigate(['/auth/login']);
        },
        error: (error) => {
          console.error('An error occurred during registration: ', error);
        },
      });
    }
  }
}