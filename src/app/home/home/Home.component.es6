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
    webDocUid = '';
    dummyWebDoc = {
        web_doc_uid: 309518960,
        form_uid: 5124,
        app_key1: 246810,
        document_timestamp: 'Aug 8, 2015',
        sender_uid: 11009,
        receiver_uid: 65652,
        engine_key: '093TSTINTDEMO',
        access_status: 12
    };
    responseWebDoc = {};
    searchWebDocs($event) {
        if ($event.keyCode === 13) {
            this.responseWebDoc = this.dummyWebDoc;
        }
    }
}

export default HomeComponent;
