AFRAME.registerComponent('whateveroffreedom', {
    init: function () {
       treasure = 5
       this.el.addEventListener('collide', function (e){
          treasure-=1
          e.detail.target.el.remove();
          pur=document.getElementById("Something")
          pur.setAttribute('text', {value: String(treasure)});
          if (treasure == 0){
            uGg=document.getElementById("VAl0")
          uGg.setAttribute('text', {value: "Victory!"});
          }
       });
    
    },
});