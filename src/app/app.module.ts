import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatPaginatorModule,
		 MatIconModule, MatCardModule, MatMenuModule} from '@angular/material';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';

import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CardComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
