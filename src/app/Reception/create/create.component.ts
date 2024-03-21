import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';

import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { APIService } from '../../api.service';
import { Visitor } from '../../Visitor';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  createFeatures: Visitor = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    notes: '',
  };

  service = inject(APIService);
  router = inject(Router);

  ngOnit() {}

  onSubmit() {
    this.service.create(this.createFeatures).subscribe((result) => {
      alert('Feedback Saved');
      this.router.navigateByUrl('home');
    });
  }
}
