import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { Visitor } from '../../Visitor';
import { APIService } from '../../api.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  detailsVisitor: Visitor = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    notes: '',
  };
  service = inject(APIService);
  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.service
      .getByID(this.activatedRoute.snapshot.params['Id'])
      .subscribe((resultedItem) => {
        this.detailsVisitor = resultedItem;
      });
  }
}
