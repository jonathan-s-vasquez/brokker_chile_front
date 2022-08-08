import { Routes } from "@angular/router";
import { CreditScoreSimulatorComponent } from "./credit-score-simulator/credit-score-simulator.component";
import { HomepageComponent } from "./homepage/homepage.component";

export const UserRouting: Routes = [
  {
    title: 'Propiedades',
    path: 'real-estate-property',
    component: CreditScoreSimulatorComponent
  },
  {
    title: 'Simulador de creditos',
    path: 'credit-score-simulator',
    component: CreditScoreSimulatorComponent
  },
  {
    title: 'Inicio',
    path: '',
    component: HomepageComponent,
  },
]
