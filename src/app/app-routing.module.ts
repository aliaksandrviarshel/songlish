import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardTrainingPageComponent } from './card-training-page/card-training-page.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchPageResolver } from './search-page/resolvers/search-page.resolver';
import { WordAddingPageComponent } from './word-adding-page/word-adding-page.component';
import { WordAddingPageResolver } from './word-adding-page/resolvers/word-adding-page.resolver';
import { DictionaryPageResolver } from './dictionary-page/resolvers/dictionary-page.resolver';
import { TrainingSelectionPageComponent } from './training-selection-page/training-selection-page.component';
import { WordTranslateTrainingPageComponent } from './word-translate-training-page/word-translate-training-page.component';
import { FillGapsTrainingPageComponent } from './fill-gaps-page/fill-gaps-training-page.component';

const routes: Routes = [
    {
        path: 'search',
        component: SearchPageComponent,
        resolve: { message: SearchPageResolver }
    },
    {
        path: 'word-adding/:id',
        component: WordAddingPageComponent,
        resolve: { message: WordAddingPageResolver }
    },
    {
        path: 'training-selection',
        component: TrainingSelectionPageComponent,
    },
    {
        path: 'card-training',
        component: CardTrainingPageComponent,
    },
    {
        path: 'fill-gaps-training',
        component: FillGapsTrainingPageComponent,
    },
    {
        path: 'word-translate-training',
        component: WordTranslateTrainingPageComponent,
    },
    {
        path: 'dictionary',
        component: DictionaryPageComponent,
        resolve: { message: DictionaryPageResolver }
    },
    {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/search',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
