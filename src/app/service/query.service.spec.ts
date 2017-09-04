import {inject, TestBed} from "@angular/core/testing";
import {QueryService} from "./query.service";

describe('QueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryService]
    })
  });
});

it('should be create', inject([QueryService], (service: QueryService) => {
  expect(service).toBeTruthy();
}));
