import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskInputComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
