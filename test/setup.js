/* eslint-env jasmine */
// Setup that will run prior to *all* specs.

// Fundamental needed imports:
import angular from 'angular';
import 'angular-mocks';
import 'angular-ui-router';
import 'babel/polyfill';
import 'jquery';

beforeEach(() => angular.mock.module('ui.router', $provide => {
    $provide.value('translateFilter', x => x);
    $provide.value('commercePlatform', {
        setPageTitle() {},
        updateState() {},
    });
    $provide.value('currentUser', { whenReady: Promise.resolve() });
    $provide.value('localizationService', { localize: jasmine.createSpy('localize') });
}));
