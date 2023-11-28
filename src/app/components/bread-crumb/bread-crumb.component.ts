import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'bread-crumb',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.scss'
})
export class BreadCrumbComponent {

}
