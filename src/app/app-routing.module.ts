
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './pokemons/list-pokemon.component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found.component';

// routes
const appRoutes: Routes = [
	{ path: '', redirectTo: 'pokemon/all', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
