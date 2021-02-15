import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { GalleryComponent, GalleryDialogComponent } from './gallery/gallery.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrainmapsvizRoutingModule } from './brainmapsviz-routing.module';
import { BrainmapsvizComponent } from './brainmapsviz.component';
import { MapVizCardComponent } from './map-viz-card/map-viz-card.component';


@NgModule({
  declarations: [
    BrainmapsvizComponent,
    MapVizCardComponent,
    GalleryComponent,
    GalleryDialogComponent
  ],
  imports: [
    CommonModule,
    BrainmapsvizRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule
  ]
})
export class BrainmapsvizModule { }