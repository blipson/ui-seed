import { NgModule     } from 'ng-facade/core';
import { RouterModule } from 'ng-facade/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            /* eslint-disable no-multi-spaces */
            {
                path:       '',
                redirectTo: '/home',
            },
            /* eslint-enable no-multi-spaces */
        ]),
    ],
})
class AppRoutingModule {}

export default AppRoutingModule;
