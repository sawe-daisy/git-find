import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  users = [];

  constructor(private serviceService: ServiceService, http: HttpClient) {
   }

  performSearch(searchTerm): any {
    this.serviceService.getProfileInfo(searchTerm.value).subscribe((res: Response) => {
      console.log(res);

    });
  }

  ngOnInit(): void {
    this.performSearch('');
  }

}
