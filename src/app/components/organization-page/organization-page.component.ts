import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Organization } from 'src/app/models/organization.model';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-organization-page',
  templateUrl: './organization-page.component.html',
  styleUrls: ['./organization-page.component.scss']
})
export class OrganizationPageComponent implements OnInit {

  organizationId: string;
  organization: Organization

  constructor(
    private activatedRoute: ActivatedRoute,
    private organizationService: OrganizationService
  ) { }

  ngOnInit() {
    this.organizationId = this.activatedRoute.snapshot.paramMap.get('organizationId');
    this.getOrganization();
  }

  private getOrganization() {
    this.organizationService.getOrganizationById(this.organizationId).subscribe((out) => {
      this.organization = out;
    });
  }
}
