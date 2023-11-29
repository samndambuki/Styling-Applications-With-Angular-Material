import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private service: UserService) {}

  ngOnInit(): void {
    //subscribe to the params observable
    this.route.params.subscribe((params) => {
      //get params id
      const id = params['id'];
      //want a method in our service that takes a number id and gives us a user
      //set our user to whatever the service returns to us
      this.user = this.service.userById(id);
    });
  }
}
