import {Component, Input} from '@angular/core';
import {SiteNavigationService} from '../../../../../service/site-navigation.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  item;

  constructor(private nav: SiteNavigationService) {
  }

  goTo(path: string) {
    this.nav.navigate(path);
  }

}
