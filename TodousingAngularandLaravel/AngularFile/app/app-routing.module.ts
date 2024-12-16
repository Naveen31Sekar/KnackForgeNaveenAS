import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { TodologinComponent } from './todologin/todologin.component';
import { TodoregisterComponent } from './todoregister/todoregister.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: 'logout', component: LogoutComponent},
  {path : '', component : WelcomepageComponent},
  { path: 'completed', component: ViewComponent },
  { path: 'index', component: IndexComponent },
  { path: 'edit', component: EditComponent},
  { path: 'create', component: CreateComponent},
  { path: 'pending', component: IndexComponent },
  { path: 'login', component: TodologinComponent},
  { path: 'register', component: TodoregisterComponent},
  { path : 'dashboard' , component: DashboardComponent}
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
