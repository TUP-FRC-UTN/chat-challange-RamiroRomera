import { Component, FormModule } from '@angular/core';
import { MensajeUsuarioComponent } from '../mensaje-usuario/mensaje-usuario.component';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [ MensajeUsuarioComponent, FormModule ],
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent {
  mensajeUsuario1: string[] = [];
  mensajeUsuario2: string[] = [];

  manejarMensajeUsuario1(mensaje: string) {
    this.mensajeUsuario1.push(mensaje);
  }

  manejarMensajeUsuario2(mensaje: string) {
    this.mensajeUsuario2.push(mensaje);
  }
}
