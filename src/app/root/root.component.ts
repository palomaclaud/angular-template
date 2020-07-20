import { Component, OnInit } from '@angular/core';
import { LayoutStateService } from '@app/state/layout';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  constructor(private layoutService: LayoutStateService) {}

  ngOnInit() {
    this.layoutService.observeOrientation();
    this.layoutService.observeHandset();
  }
}
