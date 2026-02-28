import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrls: ['./suggestion-details.component.css'],
})
export class SuggestionDetailsComponent implements OnInit {
  suggestion: Suggestion | undefined;
  // Temporary static list – will be replaced by service later
  suggestions: Suggestion[] = [
    /* same static list as before */
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.suggestion = this.suggestions.find((s) => s.id === id);
  }

  goBack(): void {
    this.router.navigate(['/suggestions']);
  }
}
