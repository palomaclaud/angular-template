import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngxs/router-plugin';
import { AppRouterStateModel } from './router.state.model';

export class AppRouterStateSerializer
  implements RouterStateSerializer<AppRouterStateModel.RouterModel> {
  serialize(routerState: RouterStateSnapshot): AppRouterStateModel.RouterModel {
    const {
      url,
      root: { queryParams },
    } = routerState;

    let { root: route } = routerState;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const { params } = route;
    return { url, params, queryParams };
  }
}
