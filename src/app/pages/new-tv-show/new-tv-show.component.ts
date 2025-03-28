import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import { Show } from '../../interfaces/show.interfaces';
import { TvShowService } from '../../services/tv-show.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-new-tv-show',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule],
templateUrl: './new-tv-show.component.html',
  styleUrl: './new-tv-show.component.css'
})
export class NewTvShowComponent {


  constructor(private tvShowService: TvShowService) {

  }

  createNewTvShow(form: NgForm): void {
    if(form.valid)
    {
      const newTvShow : Show = {
        description: form.value.description,
        image: form.value.image,
        name: form.value.name,
        episodes: form.value.episodes,
        genre: form.value.genre,
        likes: [],
        year: form.value.year
      }
      this.tvShowService.createNewTvShow(newTvShow);
      form.resetForm();
    }
    else
    {
      console.log("Formulario Invalido")
    }
  }
}
