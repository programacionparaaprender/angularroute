import { Component, OnInit } from '@angular/core';
import { TioService } from './tio.service';
import { ActivatedRoute } from '@angular/router';
import { Tio } from '../models/tio';

@Component({
  selector: 'app-detalle-tio',
  templateUrl: './detalle-tio.component.html',
  styleUrls: ['./detalle-tio.component.css']
})
export class DetalleTioComponent implements OnInit {
  tio: Tio;
  constructor(private tioService: TioService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.tioService.detalle(id).subscribe(
      data => {
        this.tio = data;
      }
    );
  }

  volver(): void {
    window.history.back();
  }


}
