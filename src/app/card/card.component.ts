import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() data!: Product;


  @Output() buyEvent = new EventEmitter<number>();
  @Output() incrementEvent = new EventEmitter<number>();
  @Output() addToShortlistEvent = new EventEmitter<object>();

  buy() {
    this.buyEvent.emit(this.data.id);
  }

  increment() {
    this.incrementEvent.emit(this.data.id);
  }
  addToShortlist() {
    this.addToShortlistEvent.emit(this.data);
  }
}
