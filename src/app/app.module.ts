import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { TaskbarComponent } from './taskbar/taskbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    ShortcutsComponent,
    TaskbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
