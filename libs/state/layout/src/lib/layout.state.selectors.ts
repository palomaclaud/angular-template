import { Selector } from '@ngxs/store';
import { LayoutState } from './layout.state';
import { LayoutStateModel } from './layout.state.model';

export class LayoutStateSelectors {
  @Selector([LayoutState])
  protected static root_mediaQuery(
    state: LayoutStateModel.State
  ): LayoutStateModel.MediaQuery {
    return state.mediaQuery;
  }

  @Selector([LayoutState])
  protected static root_selected(
    state: LayoutStateModel.State
  ): LayoutStateModel.Selected {
    return state.selected;
  }

  @Selector([LayoutStateSelectors.root_mediaQuery])
  static query_orientation(
    mediaQuery: LayoutStateModel.MediaQuery
  ): LayoutStateModel.PageOrientation {
    return mediaQuery.orientation;
  }

  @Selector([LayoutStateSelectors.root_mediaQuery])
  static isHandset(mediaQuery: LayoutStateModel.MediaQuery): boolean {
    return mediaQuery.isHandset;
  }

  @Selector([LayoutStateSelectors.root_selected])
  static selectedTheme(selected: LayoutStateModel.Selected): string {
    return selected.theme;
  }
}
