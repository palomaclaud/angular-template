import { Params } from '@angular/router';

export namespace AppRouterStateModel {
  export interface State {
    navigationId: number;
    state: RouterModel;
  }

  export interface RouterModel {
    url: string;
    params: Params;
    queryParams: Params;
  }
}
