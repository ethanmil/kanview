import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Organization } from '../models/organization.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  // apiUrl = environment.apiUrl;
  // gah, I hate this work-around:
  apiUrl = '/api';

  constructor(private httpClient: HttpClient) { }

  getOrganizationById(organizationId: string): Observable<Organization> {
    const url = `${this.apiUrl}/organizations/${organizationId}`;
    return this.httpClient.get(url).pipe(map((res: Organization) => {
      return res;
    }));
  }
}
