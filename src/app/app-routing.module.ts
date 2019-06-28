import { NgModule             } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { InicioComponent          } from './componentes/inicio/inicio.component';
import { NgStyleComponent         } from './componentes/directivas/ng-style/ng-style.component';
import { NgClassComponent         } from './componentes/directivas/ng-class/ng-class.component';
import { NgswitchComponent        } from './componentes/directivas/ngswitch/ngswitch.component';
import { DirectivaPropiaComponent } from './componentes/directivas/directiva-propia/directiva-propia.component';
import { RutasComponent           } from './componentes/rutas/rutas.component';

// Componentes » Usuarios (rutas hijas)
import { UsuarioComponent         } from './componentes/usuario/usuario.component';
import { UsuarioCrearComponent    } from './componentes/usuario/usuario-crear.component';
import { UsuarioEditarComponent   } from './componentes/usuario/usuario-editar.component';
import { UsuarioEliminarComponent } from './componentes/usuario/usuario-eliminar.component';
import { UsuarioPerfilComponent   } from './componentes/usuario/usuario-perfil.component';

const routes: Routes = [

  { path: 'inicio'         , component: InicioComponent          },

  // Directivas
  { path: 'directivapropia', component: DirectivaPropiaComponent },
  { path: 'ngstyle'        , component: NgStyleComponent         },
  { path: 'ngclass'        , component: NgClassComponent         },
  { path: 'ngswitch'       , component: NgswitchComponent        },

  // Rutas
  { path: 'rutas', component: RutasComponent},

  // Usuarios (rutas hijas)
  { path: 'usuario/:id' , component: UsuarioComponent, children: [
    { path: 'crear'     , component: UsuarioCrearComponent   },
    { path: 'editar'    , component: UsuarioEditarComponent  },
    { path: 'eliminar'  , component: UsuarioEliminarComponent},
    { path: 'ver-perfil', component: UsuarioPerfilComponent  },
    { path: '**', pathMatch: 'full', redirectTo: 'crear'}
  ]},

  // { path: 'artist/:id', component: ArtistComponent},

  { path: ''  , pathMatch: 'full', redirectTo: 'inicio'},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
