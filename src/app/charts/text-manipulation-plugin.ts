import { Chart, ChartArea, ChartItem, ChartOptions, DoughnutController } from "chart.js"
const highResValue = 1643;

export class TextManipulationPlugin {

    public static getPlugin() {
        
        return {
            id: 'text',
            beforeDraw: (chart: Chart, a: any, b: any) => {
                const chartArea = chart.chartArea as ChartArea
                const txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
                const ctx = chart.ctx;
            
                ctx.textAlign = 'center';
                ctx.textBaseline = "middle";                
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                console.log( chartArea.width-chartArea.width/2)
                let centerX = (chartArea.left+chartArea.right /2);
                let centerY = (chartArea.top+chartArea.bottom/2)+chartArea.height/((chartArea.width-chartArea.height)/10) ;

                //(chartArea.height/2)+((chartArea.height/2)*0.5) 
                //((chartArea.width / 2)/1000)+(chartArea.height/2)+chartArea.height/6 ;
                
                //dynamically calculate the font size based on canvas size
                const fontBase = 1000;
                const fontSize = 40;
                const ratio = fontSize / fontBase;
                const size = ctx.canvas.width * ratio;
                ctx.font = size + 'px Arial'
                let lineHeight =20+20*(size/100)
                //ctx.canvas.height*55/1000;
                
                const sidePadding = 50;
                const sidePaddingCalculated = (sidePadding /100) * (chart.chartArea.width);
                const elementWidth = (chart.chartArea.width) - sidePaddingCalculated;
                const { line, lines } = TextManipulationPlugin.breakWord(txt, ctx, elementWidth);
                    // Move the center up depending on line height and number of lines
                    centerY -= (lines.length / 2) * lineHeight;

                    for (const iterator of lines) {
                        ctx.fillText(iterator, centerX, centerY);
                        centerY += lineHeight;
                    }
                    ctx.fillText(line,centerX,centerY)
                    ctx.save(); 
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

