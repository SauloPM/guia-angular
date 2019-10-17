import { NgModule      } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Métodos HTTP
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes » General
import { AppComponent    } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

// Componentes » Compartidos
import { MenuComponent      } from './componentes/shared/menu/menu.component';
import { IndiceComponent    } from './componentes/shared/indice/indice.component';
import { TopButtonComponent } from './componentes/shared/top-button/top-button.component';

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
import { AuthComponent         } from './componentes/auth/auth.component';
import { ErrorComponent        } from './componentes/error/error.component';
import { AmbitoComponent       } from './componentes/ambito/ambito.component';
import { FicherosComponent     } from './componentes/ficheros/ficheros.component';
import { ServiciosComponent    } from './componentes/servicios/servicios.component';
import { CiclosVidaComponent   } from './componentes/ciclos-vida/ciclos-vida.component';
import { TypescriptComponent   } from './componentes/typescript/typescript.component';
import { DespliegueComponent   } from './componentes/despliegue/despliegue.component';
import { ComponentesComponent  } from './componentes/componentes/componentes.component';
import { ConstruccionComponent } from './componentes/construccion/construccion.component';

// Directivas
import { ResaltadoDirective    } from './directivas/resaltado.directive';
import { FirebaseComponent } from './componentes/firebase/firebase.component';

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
    UsuarioPerfilComponent,
    UsuarioCrearComponent,
    UsuarioEditarComponent,
    UsuarioEliminarComponent,
    CiclosVidaComponent,
    DespliegueComponent,
    AuthComponent,
    FicherosComponent,
    ConstruccionComponent,
    ErrorComponent,
    ComponentesComponent,
    ServiciosComponent,
    IndiceComponent,
    TypescriptComponent,
    TopButtonComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
