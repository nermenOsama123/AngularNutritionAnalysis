import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionAnalysisRoutingModule } from './nutrition-analysis-routing.module';
import { NutritionDetailsComponent } from './components/nutrition-details/nutrition-details.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [NutritionDetailsComponent, HeaderComponent],
  imports: [
    CommonModule,
    NutritionAnalysisRoutingModule
  ],
  exports: [HeaderComponent]
})
export class NutritionAnalysisModule { }
