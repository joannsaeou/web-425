import { Component, OnInit } from '@angular/core';
import { RepairsService } from '../repair.service';
import { IService } from '../repair-service.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { RepairDetailsDialogComponent } from '../repair-details-dialog/repair-details-dialog.component';

@Component({
  selector: 'app-repair-service',
  templateUrl: './repair-service.component.html',
  styleUrls: ['./repair-service.component.scss']
})
export class RepairServiceComponent implements OnInit {

  services: Observable<IService[]>;
  header: Array<string> = ['id', 'title', 'price', 'description']
  repair: IService;

  constructor(private repairsService: RepairsService, private dialog: MatDialog) {
    this.services = this.repairsService.getServices();
  }

  ngOnInit(): void {
  }

  RepairServiceComponent.showRepairDetails(id: string) {
    this.services = this.repairsService.getServices(id);

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      disableClose: true,
      width: '800px'
    })

    console.log(this.book);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }
}