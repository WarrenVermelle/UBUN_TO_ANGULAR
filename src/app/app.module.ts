import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ExplorerTopBarComponent } from './apps/explorer/explorer-top-bar/explorer-top-bar.component';
import { ExplorerContentComponent } from './apps/explorer/explorer-content/explorer-content.component';
import { WindowButtonsComponent } from './window-buttons/window-buttons.component';
import { WindowToolsBarComponent } from './window-tools-bar/window-tools-bar.component';
import { WindowContentComponent } from './window-content/window-content.component';

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
    ExplorerTopBarComponent,
    ExplorerContentComponent,
    WindowButtonsComponent,
    WindowToolsBarComponent,
    WindowContentComponent,
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
