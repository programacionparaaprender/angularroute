import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegsComponent } from './legs.component';

const routes: Routes = [{ path: '', component: LegsComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LegsRoutingModule {}
