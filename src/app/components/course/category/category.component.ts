import { Component, Input, OnInit } from '@angular/core';
import { CourseCategory } from '../../../models/category';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'], 
})
export class CategoryComponent implements OnInit {
  @Input() categories: CourseCategory[] = [];
  @Input() viewType: 'tabs' | 'list' = 'list';

  constructor(private categoryService: CategoryService) {}

  getCategories() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  ngOnInit() {
    if (!this.viewType) {
      this.viewType = 'list';
    }
    this.getCategories();
  }
}
