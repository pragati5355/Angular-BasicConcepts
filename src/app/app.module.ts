import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { FirstRouteComponent } from './first-route/first-route.component';
import { SecondRouteComponent } from './second-route/second-route.component';
import { FormComponent } from './form/form.component';
import { ComponentStyleComponent } from './component-style/component-style.component';
import { TemplateComponent } from './template/template.component';
import { DirectiveComponent } from './directive/directive.component';
import { DirectiveDirective } from './directive.directive';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    FirstRouteComponent,
    SecondRouteComponent,
    FormComponent,
    ComponentStyleComponent,
    TemplateComponent,
    DirectiveComponent,
    DirectiveDirective,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
