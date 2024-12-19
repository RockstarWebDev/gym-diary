import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryItemComponent } from './entry-item/entry-item.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryRoutingModule } from './diary-routing.module';

@NgModule({
  declarations: [EntryItemComponent, DiaryComponent],
  imports: [CommonModule, DiaryRoutingModule],
})
export class DiaryModule {}
