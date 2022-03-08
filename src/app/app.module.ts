import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

// locale time
// import { registerLocaleData } from '@angular/common';
// import localeFr from '@angular/common/locales/fr';
// registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    ShortcutsComponent,
    TaskbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
