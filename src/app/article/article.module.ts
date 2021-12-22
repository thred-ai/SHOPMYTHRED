import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from "@angular/common";
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Globals } from '../globals';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from "ngx-spinner";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ArticleComponent } from './article.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
  },
];


@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    
    NgxSpinnerModule,
    RouterModule.forChild(routes)

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [Globals],
  bootstrap: [ArticleComponent]
})
export class ArticleModule { }
