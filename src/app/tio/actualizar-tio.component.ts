import { Component, OnInit } from '@angular/core';
import { TioService } from './tio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tio } from '../models/tio';

@Component({
  selector: 'app-actualizar-tio',
  templateUrl: './actualizar-tio.component.html',
  styleUrls: ['./actualizar-tio.component.css']
})
export class ActualizarTioComponent implements OnInit {
  nombre = '';
  email = '';
  password = '';
  constructor(
    private tioService: TioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.tioService.detalle(id).subscribe(
      data => {
        this.nombre = data.nombre;
        this.email = data.email;
        this.password = data.password;
      },
      err => {
        console.log(err.error.mensaje);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    const tio = new Tio(this.nombre, this.email, this.password);
    this.tioService.actualizar(tio, id).subscribe(
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
