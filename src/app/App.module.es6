import { NgModule               } from 'ng-facade/core';
import { FormsModule            } from 'ng-facade/forms';
import { BrowserModule          } from 'ng-facade/platform-browser';
import { platformBrowserDynamic } from 'ng-facade/platform-browser-dynamic';
import WebUICore                  from 'webui-core';
import DateTime                   from 'webui-core/modules/datetime';
import Intercom                   from 'webui-core/modules/intercom';
import Feedback                   from 'webui-feedback';


import AppComponent         from './App.component';
import AppRoutingModule     from './AppRouting.module';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        WebUICore,
        DateTime,
        Intercom,
        Feedback,
        AppRoutingModule,
    ],
    providers: [
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [ AppComponent ],
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
