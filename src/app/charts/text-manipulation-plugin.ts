import { Chart, ChartArea, ChartItem, ChartOptions, ElementChartOptions } from "chart.js"

export class TextManipulationPlugin {
    public static getPlugin(){
        return {
            id:'text',
            beforeDraw: (chart: any,a: any,b: any)=>{
                    const chartOptions=chart.config.options as ChartOptions<'doughnut'>;
                    const chartElements=chartOptions.elements as any;
                    const ctx = chart.ctx;
                    const txt = 'Center Text';
                    
                    //Get options from the center object in options
                    const sidePadding = 60;
                    const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
                    chart.chartArea as ChartArea;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
                    const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
              
                    //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
                    const stringWidth = ctx.measureText(txt).width;
                    const elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
              
                    // Find out how much the font can grow in width.
                    const widthRatio = elementWidth / stringWidth;
                    const newFontSize = Math.floor(30 * widthRatio);
                    const elementHeight = (chart.innerRadius * 2);
              
                    // Pick a new font size so it will not be larger than the height of label.
                    const fontSizeToUse = Math.min(newFontSize, elementHeight);
              
                    ctx.font = fontSizeToUse + 'px Arial';
                    ctx.fillStyle = 'black';
                
                    // Draw text in center
                    ctx.fillText('Center Text', chart.chartArea.width/2, chart.chartArea.top+ (chart.chartArea.height/2) );
                    
            }
        }
    }
}

