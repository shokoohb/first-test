document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
      edge: "right"
    });




// Promise.......................
  // console.log(1);

  // new Promise(
  //   function(resolve,reject){
  //     setTimeout(function(){
  //       console.log(2);
  //       resolve("ok")
  //       // reject("not ok...")
  //     },1000)
  //   }
  // ).then(
  //   function(response){
  //     console.log(response);
  //     console.log(3);
  //   }
  // ).catch(
  //   function(error){
  //     console.log(error);
  //   }
  // )


  // console.log(4);
  // console.log(5);


// restful...........................
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then(Response) => Response.json())
//       .then(json) => console.log(json));
});