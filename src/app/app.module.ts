import { NgModule      } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent       } from './app.component';
import { InicioComponent    } from './componentes/inicio/inicio.component';
import { MenuComponent      } from './componentes/menu/menu.component';
import { NgStyleComponent   } from './componentes/directivas/ng-style/ng-style.component';
import { NgClassComponent   } from './componentes/directivas/ng-class/ng-class.component';
import { NgswitchComponent  } from './componentes/directivas/ngswitch/ngswitch.component';

// Cambiar nombre
import { AmbitoComponent    } from './componentes/ambito/ambito.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';
import { DirectivaPropiaComponent } from './componentes/directivas/directiva-propia/directiva-propia.component';


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
    NgswitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
