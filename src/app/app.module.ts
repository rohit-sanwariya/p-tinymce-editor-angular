import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AppComponent } from './app.component';
import { PEditorDemoComponent } from './p-editor-demo/p-editor-demo.component';
import {EditorModule as EM} from 'primeng/editor';
import { AppRoutingModule } from './app-routing.module';
import { TinyDemoComponent } from './tiny-demo/tiny-demo.component';
 
@NgModule({
  declarations: [
    AppComponent,
    PEditorDemoComponent,
    TinyDemoComponent
  ],
  imports: [
    BrowserModule,
    EditorModule,
    ReactiveFormsModule,
    AppRoutingModule,

    EM,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
