import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <!-- <ul>
      <li>
        Static Image:
        <img ngSrc="assets/logo.svg" alt="Angular logo" width="200" height="200" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="200" height="200" />
      </li>
    </ul> -->
    <!-- first form example -->
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
    <!-- second form example (reactive) -->
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <label>Name
        <input type="text" formControlName="name" />
      </label>
      <label>Email
        <input type="email" formControlName="email" />
      </label>
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
    <!-- <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p> -->
  `,
  imports: [NgOptimizedImage, FormsModule, ReactiveFormsModule ],
  providers: [
  ],
})
export class UserComponent {
  logoUrl = 'assets/angular.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
  })

  favoriteFramework = '';
  showFramework() {
    alert(this.favoriteFramework);
  }
  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }
}
