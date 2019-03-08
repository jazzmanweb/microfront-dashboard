import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeroModule} from 'microfront-cli/src/app/modules/hero/hero.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HeroModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
