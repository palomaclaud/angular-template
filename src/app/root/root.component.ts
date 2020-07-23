import { Component, OnInit } from '@angular/core';
import { LayoutStateSelectors, LayoutStateService } from '@app/state/layout';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  @Select(LayoutStateSelectors.selectedTheme)
  selectedTheme$: Observable<string>;

  constructor(private layoutService: LayoutStateService) {}

  ngOnInit(): void {
    this.layoutService.observeOrientation();
    this.layoutService.observeHandset();
  }
}
