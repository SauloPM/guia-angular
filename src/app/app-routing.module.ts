import { NgModule             } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { InicioComponent          } from './componentes/inicio/inicio.component';
import { NgStyleComponent         } from './componentes/ng-style/ng-style.component';
import { NgClassComponent         } from './componentes/ng-class/ng-class.component';
import { DirectivaPropiaComponent } from './componentes/directiva-propia/directiva-propia.component';

const routes: Routes = [

  // Mapeo » Ruta - Componente
  { path: 'inicio'         , component: InicioComponent          },
  { path: 'directivapropia', component: DirectivaPropiaComponent },
  { path: 'ngstyle'        , component: NgStyleComponent         },
  { path: 'ngclass'        , component: NgClassComponent         },
  // { path: 'artist/:id', component: ArtistComponent},

  // Mapeo » Ruta vacía - Componente Home
  { path: ''  , pathMatch: 'full', redirectTo: 'inicio'},

  // Mapeo » Cualquier ruta no coincidente - Componente Home
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
