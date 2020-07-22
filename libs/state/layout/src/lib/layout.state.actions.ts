import { LayoutStateModel } from './layout.state.model';

export namespace LayoutStateActions {
  export class ObserveOrientation {
    static readonly type = '[Layout] Observe app orientation changes';
  }

  export class ObserveHandset {
    static readonly type = '[Layout] Observe app handset changes';
  }

  export class SetSelectedTheme {
    static readonly type = '[Layout] Set selected theme';
    constructor(public readonly payload: { theme: LayoutStateModel.Theme }) {}
  }
}
