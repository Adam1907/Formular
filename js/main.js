var cube = {
    side: 0,
    

    cubeVolume: function(s=this.side) {
        return s*s*s;
    }, 

    cubeSurface: function(s=this.side){
        return 6*s*s
    }
}
    


     function calc() {
        cube.side = document.getElementById('side').value;
        document.getElementById('result').innerHTML =` Krychle s délkou strany  A: ${cube.side} cm, má objem ${cube.cubeVolume()} cm&sup3 a obsah ${cube.cubeSurface()} cm&sup2`;        
};


var block = {
sideA: 0,
sideB: 0,
sideC: 0,

    blockVolume: function(s1=this.sideA, s2=this.sideB, s3=this.sideC){
    return s1*s2*s3
    },

    blockSurface: function(s1=this.sideA, s2=this.sideB, s3=this.sideC){
    return 2*(s1*s2+s2*s3+s1*s3)
    }

    }


    function calcB() {
        block.sideA = document.getElementById('sideA').value;
        block.sideB = document.getElementById('sideB').value;
        block.sideC = document.getElementById('sideC').value;
        document.getElementById('result2').innerHTML =` Kvádr se stranami A: ${block.sideA} cm B: ${block.sideB} cm C: ${block.sideC} cm, má objem ${block.blockVolume()} cm&sup3 a obsah ${block.blockSurface()} cm&sup2`;        
};


var sphere = {
radius: 0,
  
    sphereSurface: function(r=this.radius){
        return 4*Math.PI*r*r
    },

    sphereVolume: function(r=this.radius){
        return 1.333*Math.PI*r*r*r
    }

}


console.log(sphere.sphereSurface())
console.log(sphere.sphereVolume())



function calcC() {
    sphere.radius = document.getElementById('radius').value;
    document.getElementById('result3').innerHTML =`Koule s poloměrem ${sphere.radius} cm má objem ${sphere.sphereVolume()} cm&sup3 a obsah ${sphere.sphereSurface()} cm&sup2`
}
  