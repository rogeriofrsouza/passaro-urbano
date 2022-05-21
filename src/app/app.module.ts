import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { HomeComponent } from './home/home.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OfertaComponent } from './oferta/oferta.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RodapeComponent } from './rodape/rodape.component';
import { DescricaoReduzidaPipe } from './shared/pipes/descricao-reduzida.pipe';
import { OfertasService } from './shared/services/ofertas.service';
import { TopoComponent } from './topo/topo.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzidaPipe,
    OrdemCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    OfertasService, 
    { provide: LOCALE_ID, useValue: 'pt-Br' },  
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
