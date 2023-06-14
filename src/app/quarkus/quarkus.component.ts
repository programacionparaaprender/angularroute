import { Component} from '@angular/core';


@Component({
  selector: 'app-quarkus',
  templateUrl: './quarkus.component.html',
  styleUrls: ['./quarkus.component.css']
})
export class QuarkusComponent {
  title = 'Quarkus es un framework web optimizado para trabajar en entornos kubernetes';
  descripcionGraalVM = 'GraalVM es una VM (Maquina virtual) y JDK de Java basada en HotSpot/OpenJDK, implementada en Java. Admite lenguajes de programación y modos de ejecución adicionales, como la compilación anticipada de aplicaciones Java para un inicio rápido y un uso reducido de la memoria.';
  descripcionQuarkus = 'Quarkus es un framework Java diseñado para entornos Kubernetes. Podemos crear proyectos con Maven y GraalVM. El objetivo de Quarkus es crear aplicaciones que consuman pocos recursos.';
}
