AFRAME.registerComponent("car", {
    schema: {
      width: { type: "number", default: 30 },
      height: { type: "number", default: 3 },
    },
  
    init: function(){
        this.el.setAttribute("geometry",{
            radius:this.data.radius,
            height:this.data.height
        });
        this.el.setAttribute("material",{color:"#1769aa"});
    }
  });
  