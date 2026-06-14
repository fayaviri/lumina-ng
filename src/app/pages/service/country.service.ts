import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CountryService {
  getCountries() {
    return [
      { name: 'Bolivia', code: 'BO' },
      { name: 'Argentina', code: 'AR' },
      { name: 'Brasil', code: 'BR' },
      { name: 'Chile', code: 'CL' },
      { name: 'Perú', code: 'PE' }
    ];
  }
}
