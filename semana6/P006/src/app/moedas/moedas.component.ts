import { Component } from '@angular/core';

@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.component.html',
  styleUrl: './moedas.component.css'
})
export class MoedasComponent {
  ngOnInit() {
    this.getCoins();
  }
  coins: ICoin[] = [];
  getCoins() {
    fetch('https://api.coinranking.com/v2/coins/?limit=5')
      .then((res) => res.json())
      .then((res) => {
        this.coins = res.data.coins;
      });
  }

}
interface ICoin {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
  sparkline: string[];
  lowVolume: boolean;
  coinrankingUrl: string;
  object: object;
  btcPrice: string;
}
