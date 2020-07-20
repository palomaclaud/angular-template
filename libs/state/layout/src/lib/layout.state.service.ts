import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { LayoutStateActions } from './layout.state.actions';

@Injectable({ providedIn: 'root' })
export class LayoutStateService {
  constructor() {}

  @Dispatch()
  observeOrientation() {
    return [new LayoutStateActions.ObserveOrientation()];
  }

  @Dispatch()
  observeHandset() {
    return [new LayoutStateActions.ObserveHandset()];
  }

  @Dispatch()
  setSelectedTheme(theme: string) {
    return [new LayoutStateActions.SetSelectedTheme({ theme })];
  }
}
