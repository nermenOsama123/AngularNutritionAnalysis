import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NutritionDetailsComponent } from './components/nutrition-details/nutrition-details.component';

const routes: Routes = [
  // as you wanaa 
  // {
  //   path: 'nutrition-details', component: NutritionDetailsComponent
  // },

  {
    path: '', component: NutritionDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutritionAnalysisRoutingModule { }
