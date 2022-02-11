var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"error404","loadChildren":"./error404/error404.module#Error404Module","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/error404/error404-routing.module.ts","module":"Error404RoutingModule","children":[{"path":"","component":"Error404Component"}],"kind":"module"}],"module":"Error404Module"}]},{"path":"login","loadChildren":"./login/login.module#LoginModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/login/login-routing.module.ts","module":"LoginRoutingModule","children":[{"path":"","component":"LoginComponent"}],"kind":"module"}],"module":"LoginModule"}]},{"path":"register","loadChildren":"./register/register.module#RegisterModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/register/register-routing.module.ts","module":"RegisterRoutingModule","children":[{"path":"","component":"RegisterComponent"}],"kind":"module"}],"module":"RegisterModule"}]},{"path":"docteurs","component":"DocteursComponent","loadChildren":"./docteurs/docteurs.module#DocteursModule","canActivate":["AuthGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/docteurs/docteurs-routing.module.ts","module":"DocteursRoutingModule","children":[{"path":"","component":"DocteursComponent"}],"kind":"module"}],"module":"DocteursModule"}]},{"path":"patients","component":"PatientsComponent","loadChildren":"./patients/patients.module#PatientsModule","canActivate":["AuthGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/patients/patients-routing.module.ts","module":"PatientsRoutingModule","children":[{"path":"","component":"PatientsComponent"}],"kind":"module"}],"module":"PatientsModule"}]},{"path":"rendezvous","component":"RendezvousComponent","loadChildren":"./rendezvous/rendezvous.module#RendezvousModule","canActivate":["AuthGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/rendezvous/rendezvous-routing.module.ts","module":"RendezvousRoutingModule","children":[{"path":"","component":"RendezvousComponent"}],"kind":"module"}],"module":"RendezvousModule"}]},{"path":"dashboard","component":"DashboardComponent","canActivate":["AuthGuard"]},{"path":"","component":"EndpointComponent","loadChildren":"./endpoint/endpoint.module#EndpointModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/endpoint/endpoint-routing.module.ts","module":"EndpointRoutingModule","children":[{"path":"","component":"EndpointComponent"}],"kind":"module"}],"module":"EndpointModule"}]},{"path":"profiluser","loadChildren":"./profileuser/profileuser.module#ProfileuserModule","canActivate":["AuthGuard"],"children":[{"kind":"module","children":[],"module":"ProfileuserModule"}]},{"path":"error-403","component":"Error403Component"},{"path":"error-401","component":"NotauthorizedComponent","data":{"title":""}},{"path":"**","component":"Error404Component","data":{"title":""}}],"kind":"module"}]}