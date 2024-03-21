import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { APIService } from '../../api.service';
import { Visitor } from '../../Visitor';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  service = inject(APIService);
  router = inject(Router);
  items: Visitor[] = [];

  ngOnInit() {
    this.service.getAll().subscribe((result) => {
      this.items = result;
    });
  }

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'phone',
    'notes',
  ];

  EditClicked(itemID: number) {
    console.log(itemID, 'From Edit');
    this.router.navigateByUrl('/edit/' + itemID);
  }
  DetailsClicked(itemID: number) {
    console.log(itemID, 'From Details');
    this.router.navigateByUrl('/details/' + itemID);
  }
  DeleteClicked(itemID: number) {
    console.log(itemID, 'From Delete');
    this.router.navigateByUrl('/delete/' + itemID);
  }
}
