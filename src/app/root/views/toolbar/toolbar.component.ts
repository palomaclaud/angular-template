import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LayoutStateSelectors } from '@app/state/layout';
import { Select } from '@ngxs/store';
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

  constructor() {}

  ngOnInit(): void {}
}
