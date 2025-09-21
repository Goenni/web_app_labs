import { Component } from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contacts = [
    { label: 'E-Mail', value: 'you@example.com', href: 'mailto:you@example.com' },
    { label: 'GitHub', value: 'github.com/yourhandle', href: 'https://github.com/yourhandle' },
  ];
}
