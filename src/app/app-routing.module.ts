import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SecondGameComponent } from './second-game/second-game.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {path: '', component: SecondGameComponent},
  {path: 'jogo02', component: GameComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
