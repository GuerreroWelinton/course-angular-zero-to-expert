import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Subject,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public initialValue: string = '';

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(300),
        // filter((value: string) => !!value),
        distinctUntilChanged()
      )
      .subscribe({
        next: (value: string) => this.onDebounce.emit(value),
      });
  }

  public emitValue(value: string): void {
    this.onValue.emit(value);
  }

  public onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm);
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }
}
