import { NgModule      } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent       } from './app.component';
import { InicioComponent    } from './componentes/inicio/inicio.component';
import { MenuComponent      } from './componentes/menu/menu.component';
import { NgStyleComponent   } from './componentes/ng-style/ng-style.component';
import { NgClassComponent   } from './componentes/ng-class/ng-class.component';

// Cambiar nombre
import { AmbitoComponent    } from './componentes/ambito/ambito.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';
import { DirectivaPropiaComponent } from './componentes/directiva-propia/directiva-propia.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    AmbitoComponent,
    NgClassComponent,
    ResaltadoDirective,
    MenuComponent,
    InicioComponent,
    DirectivaPropiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
