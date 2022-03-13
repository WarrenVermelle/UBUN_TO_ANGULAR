import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ExplorerContentComponent } from './apps/explorer/explorer-content/explorer-content.component';
import { WindowButtonsComponent } from './window-buttons/window-buttons.component';
import { ExplorerToolsComponent } from './apps/explorer/explorer-tools/explorer-tools.component';
import { TerminalToolsComponent } from './apps/terminal/terminal-tools/terminal-tools.component';
import { TerminalContentComponent } from './apps/terminal/terminal-content/terminal-content.component';
import { IdentityContentComponent } from './apps/identity/identity-content/identity-content.component';

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
    ExplorerContentComponent,
    WindowButtonsComponent,
    ExplorerToolsComponent,
    TerminalToolsComponent,
    TerminalContentComponent,
    IdentityContentComponent,
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
