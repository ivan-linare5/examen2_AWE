import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interfaces';
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-show-card',
  standalone: true, 
  imports: [NgClass, MatCardModule, MatButtonModule, RouterModule], 
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {
  @Output()
  onDeleteEvent = new EventEmitter<string>();

  @Input({ required: true })
  show: Show | null = null;

  isSelected: boolean = false;

  constructor(private router: Router) {} 

  onSelected(): void {
    this.isSelected = !this.isSelected;
  }

  onDelete(): void {
    this.onDeleteEvent.emit(this.show!.name);
  }

  onDetail(): void {
    this.router.navigate(['/tv-show-details', this.show!.name]); 
  }
}
