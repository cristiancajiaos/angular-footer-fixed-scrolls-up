import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "foo",
    loadChildren: () => import("./foo/foo.module").then((m) => m.FooModule),
  },
  {
    path: "alpha",
    loadChildren: () =>
      import("./alpha/alpha.module").then((m) => m.AlphaModule),
  },
  {
    path: "beta",
    loadChildren: () => import("./beta/beta.module").then((m) => m.BetaModule),
  },
  {
    path: "gamma",
    loadChildren: () =>
      import("./gamma/gamma.module").then((m) => m.GammaModule),
  },
  {
    path: "",
    redirectTo: "/alpha",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
