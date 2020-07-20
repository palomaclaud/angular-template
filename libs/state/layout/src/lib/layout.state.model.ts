export namespace LayoutStateModel {
  export interface State {
    mediaQuery: MediaQuery;
    selected: Selected;
  }

  export interface MediaQuery {
    orientation: PageOrientation;
    isHandset: boolean;
  }

  export interface Selected {
    theme: string;
  }

  export type PageOrientation = 'landscape' | 'portrait';

  export function defaults(): State {
    return {
      mediaQuery: {
        orientation: undefined,
        isHandset: undefined,
      },
      selected: { theme: undefined },
    };
  }
}
