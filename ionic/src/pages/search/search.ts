import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchresultsPage } from '../searchresults/searchresults';
import { ApiProvider } from '../../providers/api/api';
import { TestingPage } from '../testing/testing';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  input = {"term": ""};
  results;
  params = {test : false, code: ""};
  constructor(private api: ApiProvider, public navCtrl: NavController, public navParams: NavParams) {
    if (navParams.get('test')== true){
      this.params = {test: true, code: navParams.get('code')};
      this.input = {"term": "brad"};
      this.goSearch();
    }
  }
  goSearch(){
    //console.log(this.input);
    if (this.input.term!=  ""){
      let response = this.api.apiPost('search', this.input).then(data => {
        //console.log(data);
        this.results = data;
        let parsed = JSON.parse(data.toString());
        let status = 0;
        status = parsed.status
       // console.log(data.toString());
        this.navCtrl.push(SearchresultsPage, {results: data.toString(), status: status, test: this.params.test, code:
        this.params.code});
      });
    }



    //this.responseData = result;
  }
}
