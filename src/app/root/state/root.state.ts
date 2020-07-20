import { Injectable } from '@angular/core';
import { LayoutState } from '@app/state/layout';
import { State } from '@ngxs/store';

@Injectable()
@State<any>({
  name: 'root',
  children: [LayoutState],
})
export class RootState {
  constructor() {}
}
