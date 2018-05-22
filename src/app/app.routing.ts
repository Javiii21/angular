import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiendaComponent } from './components/tienda/tienda.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: '', redirectTo:'home', pathMatch: 'full'},
	{path: 'animales', component: AnimalsComponent},
	{path: 'contacto', component: ContactComponent},
	{path: 'home', component: HomeComponent},
	{path: 'cuidadores', component: KeepersComponent},
	{path: 'tienda', component: TiendaComponent},
	{path: 'registro', component: RegisterComponent},
	{path: 'login', component: LoginComponent},
	{path: 'mis-datos', component: UserEditComponent},
	{path: 'animal/:id', component: AnimalDetailComponent},
	{path: '**', component: HomeComponent}

];

export const appRoutingProviders: any[]= [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);