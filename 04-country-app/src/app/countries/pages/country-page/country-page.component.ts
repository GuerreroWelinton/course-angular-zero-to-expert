import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'countries-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  public availableLanguage: string[] = AVAILABLE_LANGUAGES;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountryService
  ) {}

  ngOnInit(): void {
    this.handleSearchByAlphaCode();
  }

  private handleSearchByAlphaCode(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ code }) => this.countriesService.searchByAlphaCode(code))
      )
      .subscribe({
        next: (country) => {
          if (!country) return this.router.navigateByUrl('');
          return (this.country = country);
        },
      });
  }
}

const AVAILABLE_LANGUAGES = [
  'ara',
  'bre',
  'ces',
  'cym',
  'deu',
  'est',
  'fin',
  'fra',
  'hrv',
  'hun',
  'ita',
  'jpn',
  'kor',
  'nld',
  'per',
  'pol',
  'por',
  'rus',
  'slk',
  'spa',
  'srp',
  'swe',
  'tur',
  'urd',
  'zho',
];
