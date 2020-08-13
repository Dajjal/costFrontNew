import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  items1 = [
    {title: 'Справочники', path: '/site/dictionaries', icon: '/assets/image/icons/folder.svg'},
    {title: 'Данные', path: '/data', icon: '/assets/image/icons/download.svg'},
    {title: 'Правила распределения расходов', path: 'data', icon: '/assets/image/icons/gears.svg'},
    {title: 'Расчет себестоимости услуг', path: 'data', icon: '/assets/image/icons/calculate.svg'}
  ];

  items2 = [
    {title: 'Анализ данных', path: '/site/data-analysis', icon: '/assets/image/icons/analyse-data.svg'},
    {title: 'Управление пользователями', path: 'data', icon: '/assets/image/icons/managment.svg'}
  ]

  constructor() {
    console.log('main component');
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
  }

}
