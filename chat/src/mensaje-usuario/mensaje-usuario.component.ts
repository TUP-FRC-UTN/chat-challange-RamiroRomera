import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [],
  templateUrl: './mensaje-usuario.component.html',
  styleUrls: ['./mensaje-usuario.component.css']
})
export class MensajeUsuarioComponent {
  @Input() nombreUsuario: string = '';
  @Output() mensajeEnviado: EventEmitter<string> = new EventEmitter<string>();

  nuevoMensaje: string = '';

  enviar(): void {
    this.mensajeEnviado.emit(this.nuevoMensaje);
    this.nuevoMensaje = '';
  }
}
