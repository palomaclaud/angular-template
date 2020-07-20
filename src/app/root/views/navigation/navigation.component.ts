import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutStateSelectors } from '@app/state/layout';
import { RouterStateSelector } from '@app/state/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  @Select(RouterStateSelector.url)
  $url: Observable<string>;

  @Select(LayoutStateSelectors.isHandset)
  $isHandset: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {}
}
