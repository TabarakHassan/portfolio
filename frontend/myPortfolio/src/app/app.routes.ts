import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { ProjectsComponent } from './public/projects/projects.component';
import { ContactsComponent } from './public/contacts/contacts.component';
import { AboutComponent } from './public/about/about.component';
import { LoginComponent } from './dashboard/login/login.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'contact',component:ContactsComponent},
    {path: 'dashboard/login',component: LoginComponent}
    
];




