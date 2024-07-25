import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  @Input('route') route!: string;

  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('navegando para', changes['route'].currentValue)
    this.router.navigate([this.route], { skipLocationChange: true })
  }
}
