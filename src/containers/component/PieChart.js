import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {	

  const data = (canvas) => {
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0 ,250.321, 250.011);
      gradient.addColorStop(0.00094285, 'rgba(78, 255, 244, 1)');   
      gradient.addColorStop(0.479167, 'rgba(62, 209, 255, 1)');
      gradient.addColorStop(1, 'rgba(152, 116, 255, 1)');

      return {
          labels: [5,5,10,10,20,50],
          datasets: [
            {
                backgroundColor : gradient, // Put the gradient here as a fill color
                borderColor : "rgba(255,255,255,0)",
                borderWidth: 0,
                pointColor : "rgba(255,255,255,0)",
                // pointStrokeColor : "#ff6c23",
                // pointHighlightFill: "#none",
                pointHighlightStroke: "rgba(255,255,255,0)",
                data : [5,5,10,10,20,50],
            }
          ]
      }
  }

  let options = {
    plugins: {
      labels: {
        position: 'outside',
        render: (args) => {
          return `${args.label}: ${args.value}%`;
        }
      }
    }
  };

  const divStyle = {
    width: 500,
    height: 500,
    minWidth:300
  };
  

  return (
    <div className="line-chart" style={divStyle}>
        <Pie 
            data={data} 
            options={options}
        />
    </div>
  )
}
export default PieChart;