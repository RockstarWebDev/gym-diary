import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryItemComponent } from './entry-item/entry-item.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryRoutingModule } from './diary-routing.module';
import { ListEntriesComponent } from './list-entries/list-entries.component';
import { NewItemButtonComponent } from './new-item-button/new-item-button.component';
import { NewEntryFormTemplateComponent } from './new-entry-form-template/new-entry-form-template.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EntryItemComponent, DiaryComponent, ListEntriesComponent, NewItemButtonComponent, NewEntryFormTemplateComponent],
  imports: [CommonModule, DiaryRoutingModule, RouterModule]],
})
export class DiaryModule {}
