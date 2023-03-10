import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PEditorDemoComponent } from './p-editor-demo/p-editor-demo.component';
import { TinyDemoComponent } from './tiny-demo/tiny-demo.component';


const routes:Routes = [
  {path:'',component:TinyDemoComponent},
  {path:'p-editor',component:PEditorDemoComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
