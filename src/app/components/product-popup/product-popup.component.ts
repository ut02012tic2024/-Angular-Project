import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-product-popup',
  standalone: true,
  imports: [CommonModule , NgSelectModule],
  templateUrl: './product-popup.component.html',
  styleUrl: './product-popup.component.css'
})
export class ProductPopupComponent {
  @Input() productData! : any ;
}
