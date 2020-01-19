import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatPaginatorModule,
         MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatRadioModule,
         MatGridListModule, MatSelectModule, MatDatepickerModule} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';

import { ApiService } from './services/api.service';
import { PaginatePipe } from './pipes/paginate.pipe';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { ErrorComponent } from './components/error/error.component';
import { FormComponent } from './components/form/form.component';
import { NewViewComponent } from './components/new-view/new-view.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CardComponent,
    ListComponent,
    PaginatePipe,
    HomeViewComponent,
    DetailViewComponent,
    ErrorComponent,
    FormComponent,
    NewViewComponent,
    SearchComponent
  ],
  imports: [ //modules
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    AngularFileUploaderModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatRadioModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule
  ],
  providers: [ //services
    ApiService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
