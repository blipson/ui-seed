import { State        } from 'ng-facade/a1';
import { Component,
         Inject       } from 'ng-facade/core';

import template from './Home.template.html!text';
import styles   from './Home.styles.min.css!text';

/* eslint-disable no-multi-spaces */
@Component({
    selector: 'home',
    styles:   [ styles ],
    template,
}) /* eslint-enable no-multi-spaces */
@Inject({ state: State })
class HomeComponent {
}

export default HomeComponent;
