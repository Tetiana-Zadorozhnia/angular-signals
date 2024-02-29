import { Component, OnInit } from '@angular/core';
import { CatService } from './cat.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cats = this.catService.cats;

  constructor(private catService: CatService) {}

  ngOnInit() {
    this.catService.fetchCats();
  }
}
