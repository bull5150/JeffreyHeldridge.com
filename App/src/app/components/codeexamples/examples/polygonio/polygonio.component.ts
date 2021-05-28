import { Component, OnInit } from '@angular/core';
import { PolygonIOService } from '../../../../services/polygon-io.service';
import { info, news, close, financials } from '../../../../models/polygon_models';
import { trigger, transition, animate, style} from '@angular/animations';

declare let ga: Function;

@Component({
  selector: 'polygonio',
  templateUrl: './polygonio.component.html',
  styleUrls: ['./polygonio.component.css'],
  animations:[
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('750ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('750ms ease-in', style({transform: 'translateX(500%)'}))
      ]),
    ])
  ]
})
export class PolygonioComponent implements OnInit {

  tickerInfo: info[];
  tickerNews: news[];
  tickerClose: close[];
  tickerFinancials: financials[];
  tickerFinancialsCheck: financials[];
  public infoloaded: boolean;
  public searchValue: string
  public polyOverlay: boolean;
  public toolActive: boolean;
  public showPoly: boolean;

  constructor(private polyService:PolygonIOService) { 
    ga('set', 'page', 'Poly');
    ga('send', 'pageview');
  }

  ngOnInit(): void {
    this.hideAll();
    this.infoloaded = false;
    this.getTickerInfo("msft");
  }

  getTickerInfo(symbol: string) {
    this.polyService.getTickerInfo(symbol).subscribe(response =>{
      this.tickerInfo = response;
      if (this.tickerInfo != null)
      {
        this.polyService.getTickerFinancials(symbol).subscribe(response => {
          this.tickerFinancials = response;
        });
        this.polyService.getTickerNews(symbol).subscribe(response => {
          this.tickerNews = response;
        });
        this.polyService.getTickerClose(symbol).subscribe(response => {
          this.tickerClose = response;
          this.infoloaded = true;
        });
      }
    });
  }

  //overlay functions
  hideAll(){
    this.toolActive = false;
    this.showPoly = false;
  }
  toolAction(selected: string): void {
    this.hideAll();
    this.polyOverlay = false;
    this.toolActive = true;
    switch(selected)
    {
      case "poly":
        this.showPoly = true;
        setTimeout(() => {
          this.polyOverlay = true;
        }, 725);
        break;
    }
  }
  toolClose(): void {
    this.polyOverlay = false;
    setTimeout(() => {
      this.toolActive = false;
    }, 725)
  }
}
