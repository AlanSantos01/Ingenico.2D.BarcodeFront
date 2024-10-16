import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { ProdutoListComponent } from './Pages/produto/produto-list/produto-list.component';
import { ProdutoDetailsComponent } from './Pages/produto/produto-details/produto-details.component';
import { AuthGuard } from './Guards/auth.guard';
import { QrCodeScannerComponent } from './Pages/qr-code-scanner/qr-code-scanner.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'produtos', component: ProdutoListComponent, canActivate: [AuthGuard] },
  { path: 'produtos/:id', component: ProdutoDetailsComponent },
  { path: 'leitor-qrcode', component: QrCodeScannerComponent},
  { path: '**', redirectTo: 'produtos' },
];
