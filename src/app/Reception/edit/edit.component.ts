import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../../api.service';
import { Visitor } from '../../Visitor';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  serv = inject(APIService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  editFeature: Visitor = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    notes: '',
  };

  selected: any;
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['Id']);

    this.serv
      .getByID(this.activatedRoute.snapshot.params['Id'])
      .subscribe((result) => {
        this.editFeature = result;
        console.log(this.editFeature);
      });
  }

  toHome() {
    this.router.navigateByUrl('home');
  }

  edit() {
    this.serv.edit(this.editFeature).subscribe((res) => {
      alert('Changes has been updated');
      this.router.navigateByUrl('home');
    });
  }
}
