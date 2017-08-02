import { NgModule } from 'ng-facade/core';


import HomeComponent from './home/Home.component';
import HomeRoutingModule   from './HomeRouting.module';

@NgModule({
    imports: [
        HomeRoutingModule,
    ],
    declarations: [
        HomeComponent,
    ],
})
class HomeModule {}

export default HomeModule;
