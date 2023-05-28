import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SystemComponent } from './components/system/system.component';
import { ObjectComponent } from './components/object/object.component';
import { AddNewSystemComponent } from './components/add-new-system/add-new-system.component';
import { AddNewIObjectComponent } from './components/add-new-iobject/add-new-iobject.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'system/:systemName', component: SystemComponent},
  {path: 'object/:objectName', component: ObjectComponent},
  {path: 'NewSystem', component: AddNewSystemComponent},
  {path: 'NewObject', component: AddNewIObjectComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
