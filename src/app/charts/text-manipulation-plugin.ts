import { Chart, ChartArea, ChartItem, ChartOptions, DoughnutController } from "chart.js"
const highResValue = 1643;

export class TextManipulationPlugin {

    public static getPlugin() {
        return {
            id: 'text',
            beforeDraw: (chart: Chart, a: any, b: any) => {
                const chartOptions = chart.config.options as ChartOptions<'doughnut'>;
                const chartArea = chart.chartArea as ChartArea
                const txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
                const ctx = chart.ctx;
                ctx.textAlign = 'center';
                ctx.textBaseline = "middle";
                // var centerConfig = chart.config.options.elements.center;

                const innerRadius = chartOptions.doughnut?.datasets?.borderRadius;
                const stringWidth = ctx.measureText(txt).width
                // chartEl= chartOptions.elements.
                // chart.ctx.font=
                var width = chartArea.width
                var height = chartArea.height
                
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                let centerX = chartArea.width / 2;
                let centerY = (chartArea.height / 2) + (chartArea.height / 4);
                
                //dynamically calculate the font size based on canvas size
                const fontBase = 1000;
                const fontSize = 40;
                const ratio = fontSize / fontBase;
                const size = ctx.canvas.width * ratio;
                ctx.font = size + 'px Arial'
                ctx.fillText(txt, centerX, centerY)
                ctx.save()
                // chart.ctx.fillText(txt,(chartArea.width)/2,chartArea.top+(chartArea.height/2)*1.5)
                // const centerConfig=chartElements.arc;
                // const ctx = chart.ctx;
                // const txt = 'Center Text';

                let lineHeight = 45;
                let margin = lineHeight - 4;
                
                const sidePadding = 40;
                const sidePaddingCalculated = (sidePadding /100) * (chart.chartArea.width);
                const elementWidth = (chart.chartArea.width) - sidePaddingCalculated;
                const { line, lines } = TextManipulationPlugin.breakWord(txt, ctx, elementWidth);
                    // Move the center up depending on line height and number of lines
                    centerY -= (lines.length / 2) * lineHeight;

                    for (const iterator of lines) {
                        ctx.fillText(iterator, centerX, centerY);
                        centerY += lineHeight;
                    }
                
            }
        }

    }

    private static breakWord(txt: string, ctx: any, elementWidth: number) {
        const words = txt.split(' ');
        let line = '';
        const lines = [];

        // Break words up into multiple lines if necessary
        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width;
            if (testWidth > elementWidth && n > 0) {
                lines.push(line);
                line = words[n] + ' ';
            } else {
                line = testLine;
            }
        }

        return { line, lines };
    }

}

