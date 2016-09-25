import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { routing,
    appRoutingProviders }  from './app.routing';

import { HeroListComponent }    from './components/hero-list.component';
import { CrisisListComponent }  from './components/crisis-list.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HeroListComponent,
        CrisisListComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
