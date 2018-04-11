// tslint:disable:quotemark
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgWidgetContainer, NgWidget, INgWidgetConfig, INgWidgetEvent, NgWidgetPlaceholder } from '../index';

@NgModule({
  declarations:     [ NgWidgetContainer, NgWidget, NgWidgetPlaceholder ],
  entryComponents:  [ NgWidgetPlaceholder ],
  exports:          [ NgWidgetContainer, NgWidget ]
})
export class NgDraggableWidgetModule {}