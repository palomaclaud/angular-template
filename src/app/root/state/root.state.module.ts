import { NgModule } from '@angular/core';
import { LayoutState } from '@app/state/layout';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../../../environments/environment';
import { RootState } from './root.state';

@NgModule({
  imports: [
    NgxsModule.forRoot([RootState, LayoutState], {
      /**
       * development mode enables object freeze on state,
       * that ensure that no mutation is allowed on state changes
       */
      developmentMode: !environment.production,
    }),

    /** enables @Dispatch notation for dispatching actions */
    NgxsDispatchPluginModule.forRoot(),

    /** enables @SelectSnapshot notation for selecting directly the snapshot*/
    NgxsSelectSnapshotModule.forRoot(),

    /** enables form to be tracked by state*/
    NgxsFormPluginModule.forRoot(),

    /** enables router to be tracked by state*/
    NgxsRouterPluginModule.forRoot(),

    /** enables state logs on Redux Devtools on dev environment */
    NgxsReduxDevtoolsPluginModule.forRoot({
      name: 'Angular Template',
      // disabled: environment.production,
      maxAge: 30,
    }),
  ],
})
export class RootStateModule {}
