import { Component, Input } from '@angular/core';
import { ExerciseSet, ExerciseSetList } from '../interfaces/exercise-set';

@Component({
  selector: 'app-entry-item',
  templateUrl: './entry-item.component.html',
  styleUrls: ['./entry-item.component.css'],
})
export class EntryItemComponent {
  @Input('exercise-set') exerciseSet!: ExerciseSet;

  itemTrackBy(index: number, item: ExerciseSet) {
    return item.id;
  }
}
