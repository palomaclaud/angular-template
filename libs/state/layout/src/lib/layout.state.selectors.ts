import { ImmutableSelector } from '@ngxs-labs/immer-adapter';
import { Selector } from '@ngxs/store';
import { LayoutState } from './layout.state';
import { LayoutStateModel } from './layout.state.model';

export class LayoutStateSelectors {
  @Selector([LayoutState])
  @ImmutableSelector()
  static query_orientation(
    state: LayoutStateModel.State
  ): LayoutStateModel.PageOrientation {
    return state.mediaQuery.orientation;
  }

  @Selector([LayoutState])
  @ImmutableSelector()
  static isHandset(state: LayoutStateModel.State): boolean {
    return state.mediaQuery.isHandset;
  }
}
