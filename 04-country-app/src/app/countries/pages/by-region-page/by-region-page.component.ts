import { Component } from '@angular/core';
import { Country, Region } from '../../interfaces/country.interface';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;

  constructor(private countriesService: CountryService) {}

  public onSearchByRegion(region: Region): void {
    this.selectedRegion = region;
    this.countriesService.searchByRegion(region).subscribe({
      next: (countries) => (this.countries = countries),
    });
  }
}
