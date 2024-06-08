import { TestBed } from '@angular/core/testing';

import { FavoritoSrvService } from './favorito-srv.service';

describe('FavoritoSrvService', () => {
  let service: FavoritoSrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritoSrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
