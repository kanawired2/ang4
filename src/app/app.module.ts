import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from "@angular/router";

import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

import { AppComponent }  from './app.component';
import { ArticleComponent }  from './article.component';
import { PostsComponent }  from './posts/posts.component';
import { ModalContentComponent }  from './view/view.component';
import { ArticleService } from './article.service';
import { ApiService } from './api.service';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ViewComponent } from './view/view.component';
import { AuthService } from './auth.service';

@NgModule({
  entryComponents: [
    ModalContentComponent,
  ],
  imports: [     
        AppBootstrapModule,
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {
                path:'nodes',
                component: PostsComponent
            },
            {
                path:'login',
                component: LoginComponent
            },
            {
                path:'users',
                component: UsersComponent
            },
            {
                path:'node/:id',
                component: ViewComponent
            }
        ])
  ],
  declarations: [
        AppComponent,
        ArticleComponent,
        PostsComponent,
        ModalContentComponent,
        LoginComponent,
        UsersComponent,
        ViewComponent
  ],
  providers: [
        ArticleService,
        ApiService,
        AuthService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { } 