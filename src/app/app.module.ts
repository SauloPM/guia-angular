import { NgModule      } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent     } from './app.component';
import { NgStyleComponent } from './componentes/ng-style/ng-style.component';
import { AmbitoComponent } from './componentes/ambito/ambito.component';
import { ClasesComponent } from './componentes/clases/clases.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    AmbitoComponent,
    ClasesComponent,
    ResaltadoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
