/* eslint-env jasmine */
import { TestBed           } from 'ng-facade/core/testing';
import { ErrorHandler,
         Settings          } from 'ngf-shared/services';
import { MockErrorHandler,
         MockSettings      } from 'ngf-shared/mocks';

import MockCommercePlatform from 'test/MockCommercePlatform';
import MockCurrentUser      from 'test/MockCurrentUser';

import AppComponent from './App.component';

describe('AppComponent', () => {
    let comp, fixture;

    beforeEach(async done => {
        const mockLocalization = { localize: jasmine.createSpy('localize') };

        try {
            await TestBed.configureTestingModule({
                declarations: [ AppComponent ],
                providers:    [
                    { provide: Settings,              useClass: MockSettings         }, // eslint-disable-line no-multi-spaces
                    { provide: ErrorHandler,          useClass: MockErrorHandler     }, // eslint-disable-line no-multi-spaces
                    { provide: 'commercePlatform',    useClass: MockCommercePlatform }, // eslint-disable-line no-multi-spaces
                    { provide: 'currentUser',         useClass: MockCurrentUser      }, // eslint-disable-line no-multi-spaces
                    { provide: 'intercomService',     useValue: { config() {} }      }, // eslint-disable-line no-multi-spaces
                    { provide: 'localizationService', useValue: mockLocalization     }, // eslint-disable-line no-multi-spaces
                ],
            });

            fixture = TestBed.createComponent(AppComponent);
            comp = fixture.componentInstance;
            done();
        } catch (err) {
            fail(err);
        }
    });

    it('should run localization', () => {
        expect(comp.localization.localize).toHaveBeenCalled();
    });

    describe('setTitleFromState()', () => {
        it('should set page title w/interpolated state param values', () => {
            comp.params.foo = 'Platypus';
            comp.state.current.title = 'Test - {{foo}}{{bar}}';

            spyOn(comp.platform, 'setPageTitle');
            comp.setTitleFromState();

            expect(comp.platform.setPageTitle).toHaveBeenCalledWith('Test - Platypus');
        });

        it('should notify CP to update state', () => {
            spyOn(comp.platform, 'updateState');
            comp.setTitleFromState();
            expect(comp.platform.updateState).toHaveBeenCalled();
        });
    });
});
