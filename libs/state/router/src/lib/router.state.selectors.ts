import { Params } from '@angular/router';
import { RouterState } from '@ngxs/router-plugin';
import { Selector } from '@ngxs/store';
import { AppRouterStateModel } from './router.state.model';

export class RouterStateSelector {
  @Selector([RouterState])
  static url(state: AppRouterStateModel.State): string {
    return state.state.url;
  }

  @Selector([RouterState])
  static queryParams(state: AppRouterStateModel.State): Params {
    return state.state.queryParams;
  }
}
