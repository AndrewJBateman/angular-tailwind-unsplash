import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  user: any;
  // userBio = `Programming | Engineering | Cloud | IT - Full-Stack Developer with more than 20 international engineering experience.`;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getUser('andrewjbateman').subscribe((user) => {
      this.user = user;
    });
  }
}
