import { Observable } from 'rxjs';
import { VisistsChartData } from '../../models/visits.chart.data';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services';
import { PerformanceChartData, RevenueChartData, ServerChartData } from '../../models';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  visitsChartData$: Observable<VisistsChartData>;
  performanceChartData$: Observable<PerformanceChartData>;
  serverChartData$: Observable<ServerChartData>;
  revenueChartData$: Observable<RevenueChartData>

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.visitsChartData$ = this.dashboardService.loadVisitsChartData();
    this.performanceChartData$ = this.dashboardService.loadPerformanceChartData();
    this.serverChartData$ = this.dashboardService.loadServerChartData();
    this.revenueChartData$ = this.dashboardService.loadRevenueChartData();
  }

}
