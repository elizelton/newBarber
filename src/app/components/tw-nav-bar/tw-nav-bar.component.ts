import {Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LucideAngularModule} from "lucide-angular";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './tw-nav-bar.component.html',
  styleUrl: './tw-nav-bar.component.scss'
})
export class TwNavBarComponent {
  @Output() menuClickedEvent = new EventEmitter();
  hideMenu = false;
  hideUserMenu = true;

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
  menuClicked() {
    this.hideMenu = !this.hideMenu;
    this.menuClickedEvent.emit(this.hideMenu);
  }
  userMenuClicked() {
    this.hideUserMenu = !this.hideUserMenu;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const target = event.target as HTMLElement;

    if (!this.elementRefButton?.nativeElement.contains(target) && !this.elementRef?.nativeElement.contains(target)) {
      this.hideUserMenu = true;
    }
  }

  @ViewChild('userDropdownMenu') elementRef: ElementRef | undefined;
  @ViewChild('userMenuButton') elementRefButton: ElementRef | undefined;
}
