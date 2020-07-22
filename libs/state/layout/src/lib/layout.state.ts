import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { ImmutableContext } from '@ngxs-labs/immer-adapter';
import {
  Action,
  Actions,
  ofActionDispatched,
  State,
  StateContext,
} from '@ngxs/store';
import { identity, pickBy } from 'lodash-es';
import { merge, Observable } from 'rxjs';
import { map, shareReplay, take, takeUntil } from 'rxjs/operators';
import { LayoutStateActions } from './layout.state.actions';
import { LayoutStateModel } from './layout.state.model';

@Injectable()
@State<LayoutStateModel.State>({
  name: 'layout',
  defaults: LayoutStateModel.defaults(),
})
export class LayoutState {
  constructor(
    private actions$: Actions,
    private breakpointObserver: BreakpointObserver
  ) {}

  @Action([LayoutStateActions.ObserveOrientation])
  @ImmutableContext()
  ObserveOrientation({ setState }: StateContext<LayoutStateModel.State>): void {
    const killCondition = merge(
      this.actions$.pipe(
        ofActionDispatched(LayoutStateActions.ObserveOrientation)
      )
    ).pipe(take(1));

    const keyLandscape = '(orientation: landscape)';
    const keyPortrait = '(orientation: portrait)';

    const layout$: Observable<LayoutStateModel.PageOrientation> = this.breakpointObserver
      .observe([keyLandscape, keyPortrait])
      .pipe(
        map((observer) => {
          const orientation = pickBy(observer.breakpoints, identity);

          for (const key in orientation) {
            if (orientation.hasOwnProperty(key)) {
              const isLandscape = key === keyLandscape;
              if (isLandscape) {
                return 'landscape';
              }

              const isPortrait = key === keyPortrait;
              if (isPortrait) {
                return 'portrait';
              }
            }
          }
        })
      );

    layout$.pipe(takeUntil(killCondition)).subscribe((orientation) => {
      setState((state) => {
        state.mediaQuery.orientation = orientation;
        return state;
      });
    });
  }

  @Action([LayoutStateActions.ObserveHandset])
  @ImmutableContext()
  ObserveHandset({ setState }: StateContext<LayoutStateModel.State>): void {
    const killCondition = merge(
      this.actions$.pipe(ofActionDispatched(LayoutStateActions.ObserveHandset))
    ).pipe(take(1));

    const isHandset$ = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(
        map((result) => result.matches),
        shareReplay()
      );

    isHandset$.pipe(takeUntil(killCondition)).subscribe((isHandset) => {
      setState((state) => {
        state.mediaQuery.isHandset = isHandset;
        return state;
      });
    });
  }

  @Action([LayoutStateActions.SetSelectedTheme])
  @ImmutableContext()
  SetSelectedTheme(
    { setState }: StateContext<LayoutStateModel.State>,
    { payload }: LayoutStateActions.SetSelectedTheme
  ): void {
    const { theme } = payload;

    setState((state) => {
      state.selected.theme = theme;
      return state;
    });
  }
}
