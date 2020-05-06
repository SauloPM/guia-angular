import { NgModule             } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { CrudComponent          } from './componentes/crud/crud.component';
import { RutasComponent         } from './componentes/rutas/rutas.component';
import { InicioComponent        } from './componentes/inicio/inicio.component';
import { FicherosComponent      } from './componentes/ficheros/ficheros.component';
import { ServiciosComponent     } from './componentes/servicios/servicios.component';
import { DespliegueComponent    } from './componentes/despliegue/despliegue.component';
import { TypescriptComponent    } from './componentes/typescript/typescript.component';
import { ComponentesComponent   } from './componentes/componentes/componentes.component';
import { FormulariosComponent   } from './componentes/formularios/formularios.component';
import { ConstruccionComponent  } from './componentes/construccion/construccion.component';
import { LoginRegistroComponent } from './componentes/login-registro/login-registro.component';

// Componentes » Usuarios (rutas hijas)
import { UsuarioComponent         } from './componentes/usuario/usuario.component';
import { UsuarioCrearComponent    } from './componentes/usuario/usuario-crear.component';
import { UsuarioEditarComponent   } from './componentes/usuario/usuario-editar.component';
import { UsuarioEliminarComponent } from './componentes/usuario/usuario-eliminar.component';
import { UsuarioPerfilComponent   } from './componentes/usuario/usuario-perfil.component';

// Componentes para rutas especiales
import { ErrorComponent        } from './componentes/error/error.component';

const routes: Routes = [

  // Terminado
  { path: 'inicio'     , component: InicioComponent      },
  { path: 'ficheros'   , component: FicherosComponent    },
  { path: 'despliegue' , component: DespliegueComponent  },
  { path: 'formularios', component: FormulariosComponent },

  // En proceso
  { path: 'crud'            , component: CrudComponent          },
  { path: 'rutas'           , component: RutasComponent         },
  { path: 'servicios'       , component: ServiciosComponent     },
  { path: 'typescript'      , component: TypescriptComponent    },
  { path: 'componentes'     , component: ComponentesComponent   },
  { path: 'login-y-registro', component: LoginRegistroComponent },

  // Especial
  { path: 'error'       , component: ErrorComponent        },
  { path: 'construccion', component: ConstruccionComponent },

  // Pendiente
  { path: 'auth'           , component: ConstruccionComponent },
  { path: 'pipes'          , component: ConstruccionComponent },
  { path: 'ngclass'        , component: ConstruccionComponent },
  { path: 'ngstyle'        , component: ConstruccionComponent },
  { path: 'ngswitch'       , component: ConstruccionComponent },
  { path: 'ficheros'       , component: ConstruccionComponent },
  { path: 'depuracion'     , component: ConstruccionComponent },
  { path: 'aplicaciones'   , component: ConstruccionComponent },
  { path: 'ciclos-de-vida' , component: ConstruccionComponent },
  { path: 'directivapropia', component: ConstruccionComponent },

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
