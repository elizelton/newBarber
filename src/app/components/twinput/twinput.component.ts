import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'twinput',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './twinput.component.html',
  styleUrl: './twinput.component.scss'
})
export class TwinputComponent {
  @Input() label: string = '';
  @Input() formControlName: string = '';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() errorMessage: string = '';
  @Input() disableErrorMessage: boolean = false;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';

  @Input() control: FormControl = new FormControl();

  get errorMessageToShow(): string {

    if (!this.control.touched || !this.control.errors || this.disableErrorMessage)
      return '';

    switch (true) {
      case this.control.errors?.['email']:
        return 'Email inválido';
      case this.control.errors?.['required']:
        return 'Campo obrigatório';
      case this.control.errors?.['minlength']:
        return `Mínimo de ${this.control.errors['minlength'].requiredLength} caracteres`;
      case this.control.errors?.['maxlength']:
        return `Máximo de ${this.control.errors['maxlength'].requiredLength} caracteres`;
      default:
        return this.errorMessage;
    }

  }
}
