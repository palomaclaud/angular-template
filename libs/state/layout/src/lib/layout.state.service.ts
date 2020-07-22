import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { LayoutStateActions } from './layout.state.actions';
import { LayoutStateModel } from './layout.state.model';

@Injectable({ providedIn: 'root' })
export class LayoutStateService {
  constructor() {}

  @Dispatch()
  observeOrientation(): LayoutStateActions.ObserveOrientation[] {
    return [new LayoutStateActions.ObserveOrientation()];
  }

  @Dispatch()
  observeHandset(): LayoutStateActions.ObserveHandset[] {
    return [new LayoutStateActions.ObserveHandset()];
  }

  @Dispatch()
  setSelectedTheme(
    theme: LayoutStateModel.Theme
  ): LayoutStateActions.SetSelectedTheme[] {
    return [new LayoutStateActions.SetSelectedTheme({ theme })];
  }
}
