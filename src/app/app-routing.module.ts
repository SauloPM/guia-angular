import { NgModule             } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { InicioComponent          } from './componentes/inicio/inicio.component';
import { DespliegueComponent      } from './componentes/despliegue/despliegue.component';
import { RutasComponent           } from './componentes/rutas/rutas.component';

// Componentes » Usuarios (rutas hijas)
import { UsuarioComponent         } from './componentes/usuario/usuario.component';
import { UsuarioCrearComponent    } from './componentes/usuario/usuario-crear.component';
import { UsuarioEditarComponent   } from './componentes/usuario/usuario-editar.component';
import { UsuarioEliminarComponent } from './componentes/usuario/usuario-eliminar.component';
import { UsuarioPerfilComponent   } from './componentes/usuario/usuario-perfil.component';

import { ErrorComponent           } from './componentes/error/error.component';
import { ConstruccionComponent    } from './componentes/construccion/construccion.component';

const routes: Routes = [

  // Casi terminado
  { path: 'inicio'      , component: InicioComponent       },
  { path: 'despliegue'  , component: DespliegueComponent   },
  { path: 'rutas'       , component: RutasComponent        },

  { path: 'error'       , component: ErrorComponent        },
  { path: 'construccion', component: ConstruccionComponent },

  // Pendiente
  { path: 'ficheros'       , component: ConstruccionComponent },
  { path: 'typescript'     , component: ConstruccionComponent },
  { path: 'componentes'    , component: ConstruccionComponent },
  { path: 'servicios'      , component: ConstruccionComponent },
  { path: 'pipes'          , component: ConstruccionComponent },
  { path: 'directivapropia', component: ConstruccionComponent },
  { path: 'ngstyle'        , component: ConstruccionComponent },
  { path: 'ngclass'        , component: ConstruccionComponent },
  { path: 'ngswitch'       , component: ConstruccionComponent },
  { path: 'ciclos-de-vida' , component: ConstruccionComponent },
  { path: 'auth'           , component: ConstruccionComponent },
  { path: 'depuracion'     , component: ConstruccionComponent },
  { path: 'aplicaciones'   , component: ConstruccionComponent },

  // Usuarios (rutas hijas)
  { path: 'usuario/:id' , component: UsuarioComponent, children: [
    { path: 'crear'     , component: UsuarioCrearComponent   },
    { path: 'editar'    , component: UsuarioEditarComponent  },
    { path: 'eliminar'  , component: UsuarioEliminarComponent},
    { path: 'ver-perfil', component: UsuarioPerfilComponent  },
    { path: '**', pathMatch: 'full', redirectTo: 'crear'}
  ]},

  { path: ''  , pathMatch: 'full', redirectTo: 'error'},
  { path: '**', pathMatch: 'full', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
