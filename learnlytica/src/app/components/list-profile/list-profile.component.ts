import { Component, OnInit } from '@angular/core';
import { elementAt, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;



  userdata: any;
  mydata: any;

  constructor(private user: UserService) { }
  ngOnInit(): void {
    this.userdata = this.user.getUserProfile();
    this.userdata
      .pipe(
        tap((userList: any) => {
          return userList.map(
            (element: any, index: number, arr: any) => {
              element['title'] = 'thbs' + index;
              element['name'] = "mr." + element['name'];
              return elementAt;
            })
        })
      )
      .subscribe((data: any) => { this.mydata = data });
  }
}