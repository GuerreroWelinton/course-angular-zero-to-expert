import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent implements OnInit {
  // private countriesService = inject(CountryService);

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialTermValue: string = '';

  constructor(private countriesService: CountryService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialTermValue = this.countriesService.cacheStore.byCapital.term;
  }

  public onSearchByCapital(term: string): void {
    this.isLoading = true;
    this.countriesService.searchByCapital(term).subscribe({
      next: (countries) => {
        this.countries = countries;
        this.isLoading = false;
      },
    });
  }
}
