import { Component } from '@angular/core';
import { ShowCardComponent } from '../../components/show-card/show-card.component';
import { ControlsComponent } from '../../components/controls/controls.component';
import { Show } from '../../interfaces/show.interfaces';
import { CommonModule } from '@angular/common';
import { TvShowService } from '../../services/tv-show.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ShowCardComponent, ControlsComponent, CommonModule, MatButtonModule, MatInputModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //shows: Show[] = [];

  querySearch: string="";

  get shows(): Show[]{
    return this.tvShowsService.filteredShows;
  }

  constructor(private tvShowsService: TvShowService) {
    //this.shows = this.tvShowsService.shows;
  }

  deleteByIndex(index: number): void {
    this.tvShowsService.deleteByIndex(index);
    //this.shows = this.tvShowsService.shows;
  }

  deleteLast(): void {
    this.tvShowsService.deleteLast();
    //this.shows = this.tvShowsService.shows;
  }

  orderByName(): void {
    this.tvShowsService.orderByName();
    //this.shows = this.tvShowsService.shows;
  }

  deleteByName(name: string): void {
    this.tvShowsService.deleteByName(name);
    //this.shows = this.tvShowsService.shows;
  }

  onSearch(): void {
    this.tvShowsService.querySearch = this.querySearch;
    //this.shows = this.tvShowsService.filteredShows;
    //console.log(this.querySearch);
  }

}
