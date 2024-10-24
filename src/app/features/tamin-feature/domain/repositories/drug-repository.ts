
import * as RxJS from "../../../../../core/resources/rxjs-operators";
import { DataState } from "../../../../../core/resources/data-state";
import { DrugSearchEntity } from "../entities/drug-search-entity";

export abstract class IDrugRepository {

  abstract SearchDrugListTamin(clParam: { drugSearchName : string;
    maxResultCount : number;
    skipCount : number; }): RxJS.Observable<DataState<DrugSearchEntity[]>>;
}
