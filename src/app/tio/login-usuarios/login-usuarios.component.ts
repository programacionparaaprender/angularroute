import { Component, OnInit } from '@angular/core';
import { Tio } from '../../models/tio';
import { TioService } from '../tio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-usuarios',
  templateUrl: './login-usuarios.component.html',
  styleUrls: ['./login-usuarios.component.css']
})
export class LoginUsuariosComponent implements OnInit {
  tio: Tio;
  nombre = '';
  email = '';
  password = '';
  constructor(private tioService: TioService, private router: Router) { }

  ngOnInit() {
  }

  onCreate(): void {
    this.tio = new Tio(this.nombre, this.email, this.password);
    this.tioService.nuevo(this.tio).subscribe(
      data => {
        alert(data.mensaje);
        this.router.navigate(['/']);
      },
      err => {
        alert(err.error.mensaje);
      }
    );
  }
}
