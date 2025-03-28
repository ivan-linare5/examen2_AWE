import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowService } from '../../services/tv-show.service';
import { Show } from '../../interfaces/show.interfaces';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tv-show-details',
  imports: [NgIf],
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TvShowDetailsComponent implements OnInit {
  showName: string = '';
  show: Show | undefined;

  constructor(
    private route: ActivatedRoute,
    private tvShowService: TvShowService
  ) {}

  ngOnInit(): void {
    this.showName = this.route.snapshot.paramMap.get('name') || '';
    this.show = this.tvShowService.getShowDetails(this.showName);
  }
}
