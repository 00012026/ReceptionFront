import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Visitor } from '../../Visitor';
import { APIService } from '../../api.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
})
export class DeleteComponent {
  deleteVisitor: Visitor = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    notes: '',
  };
  service = inject(APIService);
  activateRote = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.service
      .getByID(this.activateRote.snapshot.params['Id'])
      .subscribe((result) => {
        this.deleteVisitor = result;
      });
  }
  onHomeButtonClick() {
    this.router.navigateByUrl('home');
  }
  onDeleteButtonClick(id: number) {
    this.service.delete(id).subscribe((r) => {
      this.router.navigateByUrl('home');
    });
  }
}
