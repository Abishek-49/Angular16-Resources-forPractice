import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:string='';

//  to execute Template Reference variable this EventEmitter call is also imp just refer
  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>()
  
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText)
  }
   //  Template Reference variable starts here  
  updateSearchText(inputEl:HTMLInputElement){
    this.searchText=inputEl.value
    this.searchTextChanged.emit(this.searchText)
    }
  //  Template Reference variable ends here  
}
