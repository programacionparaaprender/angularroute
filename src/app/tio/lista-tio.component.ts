import { Component, OnInit } from '@angular/core';
import { TioService } from './tio.service';

@Component({
  selector: 'app-lista-tio',
  templateUrl: './lista-tio.component.html',
  styleUrls: ['./lista-tio.component.css']
})
export class ListaTioComponent implements OnInit {
  tios: any;

  constructor(private tioService: TioService) { }

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.tios = this.tioService.lista();
  }

  borrar(id: number): void {
    if (confirm('¿Seguro que lo quieres borrar?')) {
      this.tioService.borrar(id).subscribe(
        data => {
          alert('tío eliminado');
          this.load();
        }
      );
    }
  }

}
