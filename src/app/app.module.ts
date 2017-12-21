import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from "@angular/router";

import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent }  from './app.component';
import { ArticleComponent }  from './article.component';
import { PostsComponent }  from './posts/posts.component';
import { ModalContentComponent }  from './view/view.component';
import { ArticleService } from './article.service';
import { ApiService } from './api.service';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ViewComponent } from './view/view.component';
import { AuthServiceProvider } from './auth.service';
import { DemoComponent } from './demo/demo.component';
import { LogoutComponent } from './logout/logout.component';

export function buildService() {
  let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("609263946698-e4pmu9dktbudduvig5tmb9acmjhc1knu.apps.googleusercontent.com")
      //SQBkZ7zwcRfnHb8cfBTo3JS_
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("Facebook-App-Id")
    }
  ]);
  return config;
}


@NgModule({
  entryComponents: [
    ModalContentComponent,
  ],
  imports: [     
        AppBootstrapModule,
        NgxPaginationModule,
        SocialLoginModule.initialize(buildService()),
        Ng4LoadingSpinnerModule.forRoot(),
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
            },
            {
                path:'demo',
                component: DemoComponent
            },
            {
                path:'logout',
                component: LogoutComponent
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
        ViewComponent,
        DemoComponent,
        LogoutComponent
  ],
  providers: [
        ArticleService,
        ApiService,
        AuthServiceProvider
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { } 