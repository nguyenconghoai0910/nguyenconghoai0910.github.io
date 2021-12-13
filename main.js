
// Array.prototype.reduce2=function(callback,result){
//     var i=0, arrayLength=this.length
//     if(arguments.length<2){
//         i=1
//         result=this[0]
//     }
//     for(;i<arrayLength;i++){
//          result =callback(this[i],i,this)
//     }
//     return result

// }
//  //làm phẳng
//     //  forEach2
//     Array.prototype.forEach2=function(callback){
//         if(typeof callback==='function'){
//         for(var i in this){
//            if(this.hasOwnProperty(i)){
//             callback(this[i],i,this)
//            }
//         }
//     }
//     }
//     // find2
//     Array.prototype.find2=function(callback){
//         if(typeof callback==='function'){
//             for(var i in this)
//         {
//             if(callback(this[i],i,this)===true){
//                 return this[i]
//             }
//         }
//         }
//     }
//     // filter2
//     Array.prototype.filter2=function(callback){
//         if(typeof callback === 'function'){
//             var result=[]
//             for(var i in this){
//                 if(callback(this[i],i,this)===true){
//                     result.push(this[i])
//                 }
//             }
//             return result
//         }

//     }
//     // map2
//     Array.prototype.map2=function(callback,result){
//         if(typeof callback ==='function'){
//             var i=0,result=[]

//         for(;i<this.length;i++){
//             result.push(callback(this[i],i))
//         }
//         return result
//         }
//     }
//     // some2
//     Array.prototype.some2=function(callback){
//         for(var i in this){
//             if(this.hasOwnProperty(i)){
//                 if(callback(this[i],i,this)){
//                 return true
//             }
//             }
//         }
//         return false
//     }
//     // every2
//     Array.prototype.every2=function(callback){
//         for(var i in this){
//             if(this.hasOwnProperty(i)){
            
//             if(!callback(this[i],i,this)){
//                 return false
//                 break;
//             }
//         }
//             }
//             return true;
//     }
//     Array.prototype.every2 = function(callback) {
//   for(var i in this) {
//     // if(this.hasOwnProperty(i)) {
//       var result = callback(this[i], i, this)
//       if(!result) {
//         return false;
//         break;
//       }
//     // }
//   }
//   return true;
// }
    
// var boxHTMLCollection = document.querySelectorAll('input')
// var box1Element = document.querySelectorAll('input[type="checkbox"][value="1"]')
// var box2Element = document.querySelector('input[checked]:not([disabled])')
// console.log(boxHTMLCollection)
// console.log(box1Element)
// console.log(box2Element)
    
// var boxElement =  document.querySelector('.header__content-info--name')

// console.log(boxElement)

// setInterval(()=>{
//     boxElement.classList.toggle('red');
// },500)

// var users = [
//     {
//         id:1,
//         name:'Hoài Nguyễn'
//     },
//     {
//         id:2,
//         name:'Phúc Nguyễn'
//     },
//     {
//         id:3,
//         name:'Ko Lo'
//     }
// ];

// var comments=[
//     {
//         id:1,
//         user_id:1,
//         content:'Hello revda'
//     },
//     {
//         id:2,
//         user_id:2,
//         content:'Abc kold'
//     },
//     {
//         id:3,
//         user_id:1,
//         content:'Abc kold'
//     }
// ]
// //fake API

// function getComments(){
//     return new Promise(function(resolve){
//         setTimeout(() => {
//             resolve(comments)
//         }, 1000);
//     })

// }
// function getUsersByIds(userId){
//   return new Promise(function(resolve){
//      var result = users.filter(function(user){
//          return userId.includes(user.id)
//      });
//      setTimeout(() => {
//         resolve(result);
//      }, 1000);
//   })
// }
// //lấy user id trong comment
// getComments()
//     .then(function(comments){
//         var userIds=comments.map(function(comments){
//             return comments.user_id;
//         });
        
//        return getUsersByIds(userIds)
//             .then(function(users){
//                 return {
//                     users:users,
//                     comments:comments,
//                 };
//             })
//     })
//     .then(function(data){ //data nhận được là object lấy được từ bên trên
//         var commentBlock = document.getElementById('comment_Block')//biến lấy ra element có id
//         var html=''; //biến chứa chuỗi cần hiển thị
//         data.comments.forEach(function(comment){ //duyệt qua mảng cm của data
//             var user = data.users.find(function(user){//duyệt qua mảng users của object
//                 return user.id===comment.user_id //trả về user có id = userid của cm
//             })
//             html +=`<li>${user.name}: ${comment.content}</li>`
//         })
//         commentBlock.innerHTML=html
//         console.log(data)
//     })
// setInterval(()=>{
//     document.querySelector('.header__footer-icon').classList.add('start-gold')
// },1000)
// setInterval(()=>{
//     var start=document.querySelectorAll('.header__footer-icon')
//     for(i=0;i<start.length ; i++){
//         // setInterval(()=>{
//             start[i].classList.toggle('start-gold')
//         // },1000)
//     }
// },1000)
setInterval(()=>{
    document.querySelector('.header__footer-icon1').classList.toggle('start-gold')
},500)
setInterval(()=>{
    document.querySelector('.header__footer-icon2').classList.toggle('start-gold')
},600)
setInterval(()=>{
    document.querySelector('.header__footer-icon3').classList.toggle('start-gold')
},700)