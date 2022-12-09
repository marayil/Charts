import { Chart, ChartArea } from "chart.js"
export class TextManipulationPlugin {

    public static getPlugin(text?:string) {
        
        return {
            id: 'text',
            beforeDraw: (chart: Chart) => {
                const chartArea = chart.chartArea as ChartArea
                const txt = text?text: '';
                const ctx = chart.ctx;
            
                //setup for font
                ctx.textAlign = 'center';
                ctx.textBaseline = "middle";                
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                const centerX = (chartArea.left+chartArea.right /2);
                let centerY = (chartArea.top+chartArea.bottom/2) ;
                
                //dynamically calculate the font size based on canvas size
                const fontBase = 1000;
                const fontSize = 60;
                const ratio = fontSize / fontBase;
                const size = ctx.canvas.width * ratio;
                ctx.font = size*(chartArea.height/chartArea.width) + 'px Arial'
                const lineHeight =20+20*(size/100)
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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


