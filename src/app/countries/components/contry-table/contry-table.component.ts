import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'countries-contry-table',
  templateUrl: './contry-table.component.html',
  styles: [
    `img {
      width: 25px;
    }`
  ]
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];


}
