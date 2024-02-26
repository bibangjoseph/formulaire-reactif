import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ValidationComponent} from "./components/validation/validation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, ValidationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formBuilder = inject(FormBuilder)

  form!: FormGroup;
  currentDate = new Date();

  ngOnInit(): void {
      this.form = this.formBuilder.group({
          nom: ['', [Validators.required]],
          email: ['',[Validators.required, Validators.email]],
          telephone: ['', [Validators.required, Validators.maxLength(9)]],
          max_amount: ['', [Validators.required, Validators.max(100000)]],
      })
  }
}
