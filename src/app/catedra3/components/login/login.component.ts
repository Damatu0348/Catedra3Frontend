import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup; // Formulario reactivo
  errorMessage: string = ''; // Mensaje de error en caso de fallos

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Definimos las validaciones para el formulario
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials).subscribe(
        (response) => {
          // Guardar el token en localStorage
          localStorage.setItem('token', response.token);
          // Navegar a la vista de listado de posts
          console.log('Usuario logueado')
          //this.router.navigate(['/posts']);
        },
        (error) => {
          // Manejar errores (e.g., credenciales incorrectas)
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      );
    }
  }
}
