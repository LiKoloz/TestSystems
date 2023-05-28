import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SpaceSystem } from 'src/SpaceSystem';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    apiPath = 'http://localhost:5282/'

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  getAllSystems(){
    return this.http.get(this.apiPath + 'api/systems', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  getSystem(id: number){
    return this.http.get(this.apiPath + 'api/systems/' +id);
  }

  deleteSystem(id: number){
    return this.http.delete(this.apiPath + 'api/systems/delete/' + id);
  }

  addSystem(system: any){
    return this.http.post(this.apiPath + 'api/addsystem', system);
  }

  changeSystem(system: SpaceSystem){
    return this.http.put(this.apiPath + 'api/changesystem', system);
  }



  getAllObjets(){
    return this.http.get(this.apiPath + 'api/objects');
  }

  getObjet(id: number){
    return this.http.get(this.apiPath + 'api/objects/' +id);
  }

  deleteObjet(id: number){
    return this.http.delete(this.apiPath + 'api/objects/delete/' + id);
  }

  addObjet(system: SpaceSystem){
    return this.http.post(this.apiPath + 'api/addobject', system);
  }

  changeObjet(system: SpaceSystem){
    return this.http.put(this.apiPath + 'api/changeobject', system);
  }
}
