import { Component, OnInit } from '@angular/core';
import { ExchangeCurrencyService } from '../../core/services/exchange-currency.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-curency-converter',
  templateUrl: './curency-converter.component.html',
  styleUrls: ['./curency-converter.component.scss'],

})
export class CurencyConverterComponent implements OnInit {
  formGroup1 = new FormGroup<any>('')
  arrayOfAmmount: string[] = ['AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD',
    'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL',
    'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CUP',
    'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'FOK',
    'GBP', 'GEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG',
    'HUF', 'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS',
    'KHR', 'KID', 'KMF', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD',
    'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR',
    'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR',
    'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD',
    'SHP', 'SLE', 'SOS', 'SRD', 'SSP', 'STN', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP',
    'TRY', 'TTD', 'TVD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VES', 'VND', 'VUV',
    'WST', 'XAF', 'XCD', 'XDR', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW', 'ZWL']
    firstCurrency = false;
    secondCurrency = false;
    firstCurrent = 'null';
    secondCurrent = 'null'


  constructor(private myService: ExchangeCurrencyService) { }
  public getData(FC:string, SC:string, amount: number, pos:string) {
   return this.myService.getRequest(FC, SC).subscribe( value => {
    this.setData(value.conversion_rate, amount, pos);
   })
  }

  ngOnInit(): void {
    this.formGroup1 = new FormGroup({
      first_c: new FormControl('', Validators.required),
      second_c: new FormControl('', Validators.required),
      firstAmount: new FormControl('',),
      secondAmount: new FormControl('',)
    });
    this.onChanges();
  }
  private setData(rate: number, amount: number, pos: string){
    if (pos === 'first'){
      this.formGroup1.get('secondAmount')?.setValue((rate * amount).toFixed(4), {emitEvent: false});

    }else if(pos === 'second'){
      this.formGroup1.get('firstAmount')?.setValue((rate * amount).toFixed(4), {emitEvent: false});
    }
  }
  public onChanges(){
    this.formGroup1.get('first_c')?.valueChanges.subscribe(val => {
      if(this.arrayOfAmmount.includes(val.toUpperCase())){
        this.firstCurrency = true;
        this.firstCurrent = val.toUpperCase();
        console.log(1)
      }else{
        this.firstCurrency = false;
        this.secondCurrent = 'null';
      }
    })
    this.formGroup1.get('second_c')?.valueChanges.subscribe(val => {
      if(this.arrayOfAmmount.includes(val.toUpperCase())){
        this.secondCurrency = true;
        this.secondCurrent = val.toUpperCase();
        console.log(2)
      }else{
        this.secondCurrency = false;
        this.secondCurrent = 'null';
      }
    });
    this.formGroup1.get('firstAmount')?.valueChanges.subscribe(val => {
      console.log(this.firstCurrency, this.secondCurrency)
      if (this.firstCurrency && this.secondCurrency && typeof val === "number"){
        console.log(3);
        this.getData(this.firstCurrent, this.secondCurrent, val, 'first');
      }
    });
    this.formGroup1.get('secondAmount')?.valueChanges.subscribe(val => {
      console.log(this.firstCurrency, this.secondCurrency)
      if (this.firstCurrency && this.secondCurrency && typeof val === "number"){
        console.log(3);
        this.getData(this.secondCurrent, this.firstCurrent, val, 'second');
      }
    });
  }
  }

