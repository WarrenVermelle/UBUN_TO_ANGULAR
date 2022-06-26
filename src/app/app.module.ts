import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';
import { LauncherComponent } from './launcher/launcher.component';
import { PanelComponent } from './panel/panel.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ExplorerContentComponent } from './apps/explorer/explorer-content/explorer-content.component';
import { ExplorerToolsComponent } from './apps/explorer/explorer-tools/explorer-tools.component';
import { TerminalToolsComponent } from './apps/terminal/terminal-tools/terminal-tools.component';
import { TerminalContentComponent } from './apps/terminal/terminal-content/terminal-content.component';
import { IdentityContentComponent } from './apps/identity/identity-content/identity-content.component';
import { FirefoxContentComponent } from './apps/firefox/firefox-content/firefox-content.component';
import { SafePipe } from './pipes/safe.pipe';
import { ContextmenuComponent } from './contextmenu/contextmenu.component';

// locale time
// import { registerLocaleData } from '@angular/common';
// import localeFr from '@angular/common/locales/fr';
// registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    LauncherComponent,
    PanelComponent,
    ExplorerContentComponent,
    ExplorerToolsComponent,
    TerminalToolsComponent,
    TerminalContentComponent,
    IdentityContentComponent,
    FirefoxContentComponent,
    
    SafePipe,
          ContextmenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
