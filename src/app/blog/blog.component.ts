import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogposts = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBlogposts();

    console.log(this.blogposts);
  }

  fetchBlogposts() {
    this.http
      .get('http://localhost:1337/api/blogs')
      .subscribe((data: any) => (this.blogposts = data.data));
  }
}
