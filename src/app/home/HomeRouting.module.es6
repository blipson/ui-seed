import { NgModule     } from 'ng-facade/core';
import { RouterModule } from 'ng-facade/router';

import HomeComponent from './home/Home.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            /* eslint-disable no-multi-spaces */
            {
                path:           'home',
                title:          'Home',
                reloadOnSearch: false,
                component:      HomeComponent,
                children:       [],
            },
            /* eslint-enable no-multi-spaces */
        ]),
    ],
})
class DataXREFRoutingModule {}

export default DataXREFRoutingModule;
