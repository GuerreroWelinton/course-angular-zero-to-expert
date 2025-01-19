import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  public onSearchByCountry(term: string): void {
    this.countryService.searchByCountry(term).subscribe({
      next: (countries) => (this.countries = countries),
    });
  }
}
