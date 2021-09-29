import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletarPerfilComponent } from './supermonedas/completar-perfil/completar-perfil.component';
import { FelicidadesRegistroComponent } from './supermonedas/felicidades-registro/felicidades-registro.component';
import { PrincipalComponent } from './principal/principal.component';
import { QueEsComponent } from './que-es/que-es.component';
import { MisMonedasComponent } from './supermonedas/mis-monedas/mis-monedas.component';
import { MisFacturasComponent } from './supermonedas/mis-facturas/mis-facturas.component';
import { MisCalificacionesComponent } from './supermonedas/mis-calificaciones/mis-calificaciones.component';
import { CompartirPublicacionesComponent } from './supermonedas/compartir-publicaciones/compartir-publicaciones.component';
import { MonedasOtorgadasComponent } from './supermonedas/monedas-otorgadas/monedas-otorgadas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { RouterModule } from '@angular/router';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FormsModule } from '@angular/forms';
import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';
import { CoreSidebarModule } from '@core/components';
import { AuthGuard } from '../../auth/helpers/auth.guards';
import { Role } from '../../auth/models/role';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';

const routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    component: PrincipalComponent,
    data: { roles: [Role.SuperMonedas] },
    canActivate: [AuthGuard]
    // data: { animation: 'auth' }
  },
  {
    path: 'que-es',
    component: QueEsComponent,
    data: { roles: [Role.SuperMonedas] },
    canActivate: [AuthGuard]
    // data: { animation: 'auth' }
  },
  {
    path: 'supermonedas',
    children: [
      { path: '', redirectTo: 'mis-monedas', pathMatch: 'full' },
      {
        path: 'mis-monedas',
        component: MisMonedasComponent,
        data: { roles: [Role.SuperMonedas] },
        canActivate: [AuthGuard]
        // data: { animation: 'auth' }
      },
      {
        path: 'mis-facturas',
        component: MisFacturasComponent,
        data: { roles: [Role.SuperMonedas] },
        canActivate: [AuthGuard]
        // data: { animation: 'auth' }
      },
      {
        path: 'mis-calificaciones',
        component: MisCalificacionesComponent,
        data: { roles: [Role.SuperMonedas] },
        canActivate: [AuthGuard]
        // data: { animation: 'auth' }
      },
      {
        path: 'mis-calificaciones',
        component: MisCalificacionesComponent,
        data: { roles: [Role.SuperMonedas] },
        canActivate: [AuthGuard]
        // data: { animation: 'auth' }
      },
      {
        path: 'compartir-publicaciones',
        component: CompartirPublicacionesComponent,
        data: { roles: [Role.SuperMonedas] },
        canActivate: [AuthGuard]
        // data: { animation: 'auth' }
      },
      {
        path: 'monedas-otorgadas',
        component: MonedasOtorgadasComponent,
        data: { roles: [Role.SuperMonedas] },
        canActivate: [AuthGuard]
        // data: { animation: 'auth' }
      },
    ]
  },
  {
    path: 'bienvenido',
    component: BienvenidoComponent,
    data: { activacion: 1 },
    canActivate: [AuthGuard]

    // data: { animation: 'auth' }
  },

];

@NgModule({
  declarations: [
    BienvenidoComponent,
    CompletarPerfilComponent,
    FelicidadesRegistroComponent,
    PrincipalComponent,
    QueEsComponent,
    MisMonedasComponent,
    MisFacturasComponent,
    MisCalificacionesComponent,
    CompartirPublicacionesComponent,
    MonedasOtorgadasComponent],
  imports: [
    CoreCommonModule,
    RouterModule.forChild(routes),
    ContentHeaderModule,
    TranslateModule,
    SwiperModule,
    FormsModule,
    CoreTouchspinModule,
    CoreSidebarModule,
    NgbModule,
  ],
  exports: [
    BienvenidoComponent,
    CompletarPerfilComponent,
    FelicidadesRegistroComponent,
    PrincipalComponent,
    QueEsComponent,
    MisMonedasComponent,
    MisFacturasComponent,
    MisCalificacionesComponent,
    CompartirPublicacionesComponent,
    MonedasOtorgadasComponent]
})
export class PersonasModule { }
