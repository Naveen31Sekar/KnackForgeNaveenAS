import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { TodoService } from './todo.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SingleviewComponent } from './singleview/singleview.component';
import { TodologinComponent } from './todologin/todologin.component';
import { TodoregisterComponent } from './todoregister/todoregister.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    IndexComponent,
    ViewComponent,
    SingleviewComponent,
    TodologinComponent,
    TodoregisterComponent,
    WelcomepageComponent,
    DashboardComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
