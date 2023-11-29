import { state } from '@angular/animations';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  public isScreenSmall: boolean = false;

  users: Observable<User[]> = new Observable<User[]>();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router
  ) {}

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  ngOnInit(): void {
    this.breakpointObserver
      // .observe([Breakpoints.XSmall]);
      .observe([`max-width: ${SMALL_WIDTH_BREAKPOINT}px`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

    this.users = this.userService.users;
    this.userService.loadAll();

    // this.users.subscribe((data) => {
    //   // console.log(data);
    //   //checking if we have any data
    //   if (data.length > 0)
    //     this.router.navigate(['/contactmanager', data[0].id]);
    // });

    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        //TODO Close our sidenav
        this.sidenav.close();
      }
    });
  }
}
