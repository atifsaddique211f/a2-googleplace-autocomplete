#Angular 2 Google Place Map Library Auto Complete


##Output
![google-search](http://image.prntscr.com/image/81dce748b78c4b7fa51623d089ce2dbf.png)


##Usage
      npm install --save a2-google-place

### Add GooglePlaceModule in your NgModule imports file 
<pre>
import {GooglePlaceModule} from "angular2-google-place"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    <b>GooglePlaceModule</b>
  ],
  providers: [],
  bootstrap: [AppComponent]
})
</pre>

### Use google place directive like below
```
<input type="text" [(ngModel)]="address"  (setAddress)="getAddress($event)" googleplace/>
```
