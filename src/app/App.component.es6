import { RootScope,
         State,
         StateParams   } from 'ng-facade/a1';
import { Component,
         Inject        } from 'ng-facade/core';
import { ErrorHandler,
         Settings      } from 'ngf-shared/services';

import template from './App.template.html!text';
import styles   from './App.styles.min.css!text';

/* eslint-disable no-multi-spaces */
@Component({
    selector: 'ui-seed-app',
    styles:   [ styles ],
    template,
})
@Inject({
    cfg:          Settings,
    errHandler:   ErrorHandler,
    intercom:     'intercomService',
    localization: 'localizationService',
    params:       StateParams,
    platform:     'commercePlatform',
    rootScope:    RootScope,
    state:        State,
}) /* eslint-enable no-multi-spaces */
class AppComponent {
    navItems = [
        {
            state: 'home',
            name:  '{{ "ui-seed.tabs.home" | translate }}',
        },
    ];

    async ngOnInit() {
        this.localization.localize({
            app:  'ui-seed',
            path: './lang/',
        });

        await this.cfg.get();
        this.intercom.config({ app_id: this.cfg.intercomAppID });

        this.rootScope.$on('$stateChangeSuccess', ::this.setTitleFromState);
    }

    setTitleFromState() {
        const title = (this.state.current.title || '')
            .replace(/\{\{([A-Za-z0-9-_]+)\}\}/g, ($0, $1) => this.params[$1] || '');
        this.platform.setPageTitle(title);
        this.platform.updateState();
        window.scrollTo(0, 0);
    }
}

export default AppComponent;
