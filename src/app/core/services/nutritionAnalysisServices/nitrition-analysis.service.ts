import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INutritionDetailsRequest } from '../../interfaces/nutritionAnalysisAPI/inutrition-details-request';
import { BaseResponseModel } from '../../ng-model/base-response-model';

@Injectable({
  providedIn: 'root'
})
export class NutritionAnalysisService {
  nutritionDetails = environment.baseUrl + 'nutrition-details';


  constructor(private http: HttpClient) {
  }

  getNutritionDetails(model: INutritionDetailsRequest): Observable<BaseResponseModel> {
    return this.http.post<BaseResponseModel>(this.nutritionDetails, model);
  }
}
