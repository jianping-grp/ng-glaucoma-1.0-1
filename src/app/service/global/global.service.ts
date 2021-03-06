import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class GlobalService {
  //global loading status

  private _globalLoading = new Subject<boolean>();
  loadingStatus = this._globalLoading.asObservable();
  setLoading(status: boolean): void {
    this._globalLoading.next(status)
  }
}
