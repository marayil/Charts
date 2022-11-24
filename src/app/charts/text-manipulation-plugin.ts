import { Chart, ChartArea, ChartItem, ChartOptions, DoughnutController } from "chart.js"
const highResValue = 1643;

export class TextManipulationPlugin {

    public static getPlugin(){
        return {
            id:'text',
            beforeDraw: (chart: Chart,a: any,b: any)=>{
                    const chartOptions=chart.config.options as ChartOptions<'doughnut'>;
                   const chartArea= chart.chartArea as ChartArea
                   const txt='asdasd asdasfysduvbs sadfuidfoaisf oaisjdoiasdj';
                    const ctx= chart.ctx;
                    ctx.textAlign='center';
                    ctx.textBaseline="middle";
                    // var centerConfig = chart.config.options.elements.center;

                    const innerRadius=chartOptions.doughnut?.datasets?.borderRadius;
                    const stringWidth=ctx.measureText(txt).width
                    // chartEl= chartOptions.elements.
                    // chart.ctx.font=
                     // var width=this.chart.width
                         var height=chartArea.height
                        var textX = Math.round((chartArea.width - ctx.measureText(txt).width) / 2);

                        var textY =chart.chartArea.top +(height / 2)*1.35;
                        ctx.textAlign='center';
                        ctx.textBaseline='middle'
                        //dynamically calculate the font size based on canvas size
                        const fontBase=1000;
                        const fontSize=10;
                        const ratio =fontSize/fontBase;
                        const size= ctx.canvas.width*ratio;
                        ctx.font=size+'px Arial'
                      ctx.fillText(txt,chartArea.width/2,(chartArea.height/2)+(chartArea.height/4))
                      ctx.save()
                    // chart.ctx.fillText(txt,(chartArea.width)/2,chartArea.top+(chartArea.height/2)*1.5)
                    // const centerConfig=chartElements.arc;
                    // const ctx = chart.ctx;
                    // const txt = 'Center Text';
                    if(innerRadius)
                    // const sidePaddingCalculated = (sidePadding / 100) * (innerRadius * 2)
                    console.log(chart.ctx.arc.length)
                    ctx.font='';
                    
                    //Get options from the center object in options
               
                //     ctx.textAlign = 'center';
                //     ctx.textBaseline = 'middle';
                //     // const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
                //     // const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
              
                //     //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
                //     const stringWidth = ctx.measureText(txt).width;
                //     const elementWidth = (chart.chartArea.innerRadius * 2) - sidePaddingCalculated;
                    
                //     // Find out how much the font can grow in width.
                //     const widthRatio = elementWidth / stringWidth;
                //     const newFontSize = Math.floor(30 * widthRatio);
                //     const elementHeight = (chart.innerRadius*4);

                //     // Pick a new font size so it will not be larger than the height of label.
                //     const fontSizeToUse = Math.min(newFontSize, elementHeight);
                //     console.log(fontSizeToUse)
                //     ctx.font = fontSizeToUse + 'px Arial';
                //     ctx.fillStyle = 'black';
                // // const{centerX,y}=this.getCoordinates(chart,fontSizeToUse)
                // // const centerY=y;
                //     // Draw text in center
                //     ctx.fillText('Center Text', chart.chartArea.width/2, chart.chartArea.top+ (chart.chartArea.height/2)*1.35);
                    
            }
        }
        
    }
    private static getCoordinates(chart:any, fontSizeToUse: number) {
        const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
        let centerY = chart.height / 2;
        if (chart.config.options.circumference <= 180) {
            centerY = chart.height - (fontSizeToUse / 3);
        } else {
            if ((centerY / 2) < fontSizeToUse) {
                centerY = centerY + 2;
            }
        }

        return { centerX, y: centerY };
    }
    private static breakWord(txt: string, ctx: any, elementWidth: number) {

        const words = txt.split(' ');
        let line = '';
        const lines = [];

        // Break words up into multiple lines if necessary
        for (let n = 0; n < words.length; n += 1) {
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

