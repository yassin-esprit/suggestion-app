import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SuggestionListComponent,
    SuggestionDetailsComponent,
    SuggestionFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SuggestionsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class SuggestionsModule {}
