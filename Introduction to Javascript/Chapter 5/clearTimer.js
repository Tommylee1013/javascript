let id = setInterval(function(){
    console.log("print");
}, 1000);

setTimeout(function (){
    clearTimeout(id);
}, 3000);