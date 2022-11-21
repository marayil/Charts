import { ChartConfiguration, Colors } from 'chart.js';
import { reduce } from 'rxjs';
import { ChartTypes } from './charts.enum';

export class ChartHelper {
  public static getChartConfiguration(
    type: string,
    data: number[],
    labels: string[]
  ): ChartConfiguration<'bar' | 'line' | 'pie' | 'doughnut'> | null {
    let chartConfiguration: ChartConfiguration<
      'bar' | 'line' | 'pie' | 'doughnut'
    >;
    switch (type) {
      case ChartTypes.BAR:
        {
          console.log('hello');
          const defaultConfig: ChartConfiguration<
            'bar' | 'line' | 'pie' | 'doughnut'
          > = {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'graph',
                  data: data,
                  type: 'bar',
                  backgroundColor: 'red',
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
            },
          };
          chartConfiguration = { ...defaultConfig };
          return chartConfiguration;
        }
        break;
      case ChartTypes.LINE:
        {
          const defaultConfig: ChartConfiguration<
            'bar' | 'line' | 'pie' | 'doughnut'
          > = {
            type: 'line',
            data: {
              labels: labels,
              datasets: [
                {
                  data: data,
                  label: 'Line-Graph',
                  type: 'line',
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
            },
          };
          chartConfiguration = { ...defaultConfig };
          return chartConfiguration;
        }
        break;
      case ChartTypes.DOUGHNUT:
        {
          const defaultConfig: ChartConfiguration<
            'bar' | 'line' | 'pie' | 'doughnut'
          > = {
            type: 'doughnut',
            data: {
              labels: labels,
              datasets: [
                {
                  data: data,
                  label: 'Doughnut',
                  type: 'doughnut',
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
            },
          };
          chartConfiguration = { ...defaultConfig };
          return chartConfiguration;
        }

        break;
      case ChartTypes.PIE:
        {
          const defaultConfig: ChartConfiguration<
            'bar' | 'line' | 'pie' | 'doughnut'
          > = {
            type: 'pie',
            data: {
              labels: labels,
              datasets: [
                {
                  data: data,
                  label: 'pie',
                  type: 'pie',
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
            },
          };
          chartConfiguration = { ...defaultConfig };
          return chartConfiguration;
        }
        break;
      default:
        return null;
        break;
    }
  }
}
