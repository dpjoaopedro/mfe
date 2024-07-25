import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'recuperacao/foo', component: FooComponent },
      { path: 'recuperacao/bar', component: BarComponent },
    ])
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('mf-recuperacao', ce);
  }

}