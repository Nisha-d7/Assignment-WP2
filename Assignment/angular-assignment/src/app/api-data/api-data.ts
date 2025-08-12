import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Post, User } from '../services/data';

@Component({
  selector: 'app-api-data',
  imports: [CommonModule],
  templateUrl: './api-data.html',
  styleUrl: './api-data.css'
})
export class ApiDataComponent implements OnInit {
  posts: Post[] = [];
  users: User[] = [];
  loading = false;
  error = '';
  selectedTab = 'posts';

  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.loading = true;
    this.error = '';
    this.selectedTab = 'posts';
    
    this.dataService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts.slice(0, 10); // Limit to first 10 posts
        this.loading = false;
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Error loading posts:', err);
        this.error = 'Failed to load posts. Please try again.';
        this.loading = false;
        this.cdr.detectChanges(); 
      }
    });
  }

  loadUsers(): void {
    this.loading = true;
    this.error = '';
    this.selectedTab = 'users';
    
    this.dataService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Error loading users:', err);
        this.error = 'Failed to load users. Please try again.';
        this.loading = false;
        this.cdr.detectChanges(); 
      }
    });
  }
}
