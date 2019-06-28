import { NgModule      } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes » General
import { AppComponent       } from './app.component';
import { InicioComponent    } from './componentes/inicio/inicio.component';
import { MenuComponent      } from './componentes/menu/menu.component';

// Componentes » Directivas
import { NgStyleComponent   } from './componentes/directivas/ng-style/ng-style.component';
import { NgClassComponent   } from './componentes/directivas/ng-class/ng-class.component';
import { NgswitchComponent  } from './componentes/directivas/ngswitch/ngswitch.component';
import { DirectivaPropiaComponent } from './componentes/directivas/directiva-propia/directiva-propia.component';

// Componentes » Rutas
import { RutasComponent } from './componentes/rutas/rutas.component';

// Componentes » Usuarios (subrutas)
import { UsuarioComponent         } from './componentes/usuario/usuario.component';
import { UsuarioCrearComponent    } from './componentes/usuario/usuario-crear.component';
import { UsuarioEditarComponent   } from './componentes/usuario/usuario-editar.component';
import { UsuarioEliminarComponent } from './componentes/usuario/usuario-eliminar.component';
import { UsuarioPerfilComponent   } from './componentes/usuario/usuario-perfil.component';

// Cambiar nombre
import { AmbitoComponent    } from './componentes/ambito/ambito.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    AmbitoComponent,
    NgClassComponent,
    ResaltadoDirective,
    MenuComponent,
    InicioComponent,
    DirectivaPropiaComponent,
    NgswitchComponent,
    RutasComponent,
    UsuarioComponent,
    UsuarioComponent,
    UsuarioPerfilComponent,
    UsuarioCrearComponent,
    UsuarioEditarComponent,
    UsuarioEliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
