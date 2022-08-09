import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsComponent } from './views/views.component';
import { UserComponent } from './views/user/user.component';
import { AdminComponent } from './views/admin/admin.component';
import { LoginComponent } from './views/login/login.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomepageComponent } from './views/user/homepage/homepage.component';
import { PresentationComponent } from './views/user/homepage/presentation/presentation.component';
import { MeetUsComponent } from './views/user/homepage/meet-us/meet-us.component';
import { OurServicesComponent } from './views/user/homepage/our-services/our-services.component';
import { CreditScoreSimulatorComponent } from './views/user/credit-score-simulator/credit-score-simulator.component';
import { RealEstatePropertyComponent } from './views/user/real-estate-property/real-estate-property.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { HomePlusComponent } from './components/svg/home-plus/home-plus.component';
import { MoneyMultipleComponent } from './components/svg/money-multiple/money-multiple.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditTypeComponent } from './views/user/credit-score-simulator/credit-type/credit-type.component';
import { PersonalInformationComponent } from './views/user/credit-score-simulator/personal-information/personal-information.component';
import { WorkInformationComponent } from './views/user/credit-score-simulator/work-information/work-information.component';
import { EconomicBackgroundComponent } from './views/user/credit-score-simulator/economic-background/economic-background.component';
import { SimulatorResultsComponent } from './views/user/credit-score-simulator/simulator-results/simulator-results.component';
import { SimulationGeneratedComponent } from './views/user/credit-score-simulator/simulation-generated/simulation-generated.component';
import { SelectComponent } from './components/inputs/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    UserComponent,
    AdminComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    PresentationComponent,
    MeetUsComponent,
    OurServicesComponent,
    CreditScoreSimulatorComponent,
    RealEstatePropertyComponent,
    SectionTitleComponent,
    HomePlusComponent,
    MoneyMultipleComponent,
    CreditTypeComponent,
    PersonalInformationComponent,
    WorkInformationComponent,
    EconomicBackgroundComponent,
    SimulatorResultsComponent,
    SimulationGeneratedComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
