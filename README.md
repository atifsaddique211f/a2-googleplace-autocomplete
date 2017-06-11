#Angular 2 Google Place Map Library Auto Complete


##Output
![google-search](http://image.prntscr.com/image/81dce748b78c4b7fa51623d089ce2dbf.png)


##Usage
      npm install --save angular2-google-place
      
### Add following library in your index.html

 ```
   <script src="https://maps.googleapis.com/maps/api/js?libraries=places&sensor=false&key=API_KEY"></script>
 ```

 You need to replace the key in above library with your own google api key. 
 You can generate key from here :
 [Generate Key](https://developers.google.com/places/web-service/get-api-key)
 
 You also need to enable Google Places API Web Service from google developer [Console](https://console.developers.google.com).
 
 
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
