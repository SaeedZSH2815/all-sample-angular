

import { Observable } from "../../../../../core/resources/rxjs-operators";
import { DataState } from "../../../../../core/resources/data-state";
import { UseCase } from "../../../../../core/resources/use-case";
import { DrugSearchEntity } from "../entities/drug-search-entity";
import { IDrugRepository } from "../repositories/drug-repository";

export class  DrugListUseCase implements UseCase< { drugSearchName : string;
                                                              maxResultCount : number;
                                                              skipCount : number; } ,
                                                   DataState<DrugSearchEntity[]> >{


  constructor(private _drugRepository : IDrugRepository){

  }
  exceute(clParam: { drugSearchName: string; maxResultCount: number; skipCount: number; }): Observable<DataState<DrugSearchEntity[]>> {
    return this._drugRepository.SearchDrugListTamin(clParam).pipe();
  }



}



