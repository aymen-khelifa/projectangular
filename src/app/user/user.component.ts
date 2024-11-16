import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  color = "blue";
  titre: string = 'hello';
  person = {
    id: 1,
    name : 'test',
    age : 20
  }
  quantity = 3;
  imgsrc = "/assets/schema-detudes-fr-1.jpg";
  height = 200;
  width = 200;
  acheter() {
    this.quantity--;
  }
  onInputChange(event:Event) {
    const el = event.target as HTMLInputElement
    this.color = el.value

  }
}
