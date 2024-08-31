import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
  @Input() nombreUsuario: string | undefined;
  @Output() mensajeEnviado: EventEmitter<string> = new EventEmitter<string>();

  mensaje: string = '';

  enviar(): void {
    this.mensajeEnviado.emit(`${this.nombreUsuario}: ${this.mensaje}`);
    this.mensaje = '';
  }
}
