import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {
  LayoutStateModel,
  LayoutStateSelectors,
  LayoutStateService,
} from '@app/state/layout';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input()
  drawer: MatSidenav;

  @Select(LayoutStateSelectors.isHandset)
  $isHandset: Observable<boolean>;

  constructor(
    private store: Store,
    private layoutService: LayoutStateService
  ) {}

  ngOnInit(): void {}

  changeTheme(): void {
    const selectedTheme = this.store.selectSnapshot(
      LayoutStateSelectors.selectedTheme
    );

    const newTheme: LayoutStateModel.Theme =
      selectedTheme !== 'dark' ? 'dark' : 'normal';
    this.layoutService.setSelectedTheme(newTheme);
  }
}
