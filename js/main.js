var cube = {
    side: 0,
    

    cubeVolume: function(s=this.side) {
        return s*s*s;
    }, 

    cubeSurface: function(s=this.side){
        return 6*s*s
    }
}
    
    console.log(cube.cubeVolume());
    
    console.log(cube.side);
    
    cube.height = 15;

     function calc() {
        cube.side = document.getElementById('side').value;
        document.getElementById('result').innerHTML =` Krychle s delkou strany a ${cube.side}cm, má objem ${cube.cubeVolume()}cm3 a obsah ${cube.cubeSurface()} cm2`;        
};

var block = {
sideA: 0,
sideB: 0,
sideC: 0,

blockVolume: function(s1=this.sideA,s2=this.sideB,s3=this.sideC){
return 
},

blockVolume: function(s1=this.sideA, s2=this.sideB, s3=this.sideC){

}

}