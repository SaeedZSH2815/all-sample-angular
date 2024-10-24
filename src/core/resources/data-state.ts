
export class DataState<T>{
   public  data?  : T;
   public  error? : any;
 }

export class DataSuccess<T> extends DataState<T> {}

export class DataFailed<T> extends DataState<T> {}

