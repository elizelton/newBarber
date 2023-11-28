import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Color, TailwindColors} from "../color.enum";
import {Size} from "../size.enum";

@Component({
  selector: 'twbutton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [ngClass]="getButtonClasses()"
      [disabled]="disabled || loading"
      [type]="buttonType"
      (click)="onClick()"
    >
      <ng-container *ngIf="loading; else content">
        <svg aria-hidden="true" role="status" [ngClass]="getSpinnerClasses()" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
        </svg>
          {{loadingText}}
      </ng-container>
      <ng-template #content>
        <ng-content></ng-content>
      </ng-template>
      <ng-content select="[app-button-icon]"></ng-content>
    </button>
  `,
})

export class TwbuttonComponent {
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() icon: string = '';
  @Input() size: Size = Size.Medium;
  @Input() color: Color = Color.Primary;
  @Input() outline: boolean = false;
  @Input() loading: boolean = false;
  @Input() buttonType: 'button' | 'submit' | 'reset' = 'button';
  @Input() loadingText: string = 'Carregando...';

  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  getButtonClasses(): string[] {
    const baseClasses = [ 'rounded', 'transition', 'duration-300', 'ease-in-out','font-medium', 'text-center'];

    const sizeClass = this.getSizeClass();
    const colorClass = this.getColorClass();
    const disabledClass = this.getDisabledClass();

    if (this.fullWidth) {
      baseClasses.push('w-full');
    }

    if (this.outline) {
      baseClasses.push(...this.getOutlineClass());
    } else {
      baseClasses.push(...this.getFillClass());
    }

    return baseClasses.concat(sizeClass, disabledClass).filter(Boolean);
  }

  getSpinnerClasses(): string[] {
    const baseClasses = ['inline', 'w-5', 'h-5', 'me-3', 'animate-spin'];

    return baseClasses;
  }


  private getSizeClass(): string[] {
    switch (this.size) {
      case Size.Small:
        return ['text-sm', 'px-3', 'py-2'];
      case Size.Large:
        return ['text-lg', 'px-5', 'py-3'];
      default:
        return ['text-base', 'px-5', 'py-2.5'];
    }
  }

  private getColorClass(): string[] {
    return this.outline ? this.getOutlineClass() : this.getFillClass();
  }

  private getOutlineClass(): string[] {
    return [this.getBorderColorClass(), this.getTextColorClass()];
  }

  private getFillClass(): string[] {
    return [this.getBackgroundColorClass(), 'text-white'];
  }

  private getBorderColorClass(): string {
    return TailwindColors[this.color].split(' ')[1];
  }

  private getTextColorClass(): string {
    return TailwindColors[this.color].split(' ')[2];
  }

  private getBackgroundColorClass(): string {
    return TailwindColors[this.color].split(' ')[0];
  }

  private getDisabledClass(): string[] {
    if (this.disabled || this.loading) {
      return ['opacity-50', 'cursor-not-allowed'];
    } else {
      return ['cursor-pointer'];
    }
  }

  onClick(): void {
    this.buttonClick.emit();
  }
}
