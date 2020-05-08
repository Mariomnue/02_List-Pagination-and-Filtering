/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const student_list = document.getElementsByClassName("student-item cf");
const number_of_items = 10;
//const student-details = student_list[0].firstElementChild.innerHTML
//const joined-details = student_list[0].lastElementChild.innerHTML

//console.log("student_list length: " +student_list.length);

const showPage = (list, page) => {
list = student_list;//remove me later
  let startIndex = (page * number_of_items) - number_of_items;
  let endIndex = page * number_of_items;
//console.log(startIndex+ "    " +endIndex);
  for(var i=0; i<student_list.length; i++){
    student_list[i].style.display = "none"
    if(i >= startIndex && i < endIndex){
      student_list[i].style.display = "block"
    }
  }
  appendPageLinks(list, 1);
}

showPage(1, 1);///never send a 0;
//pagination(1);
function appendPageLinks(list, page){
//look for the list below before you recreate it!
// if(div !== true){
//   console.log("true")
// }
// let startIndex = (page * number_of_items) - number_of_items;
// let endIndex = page * number_of_items;
// let newList;
// //console.log(newList.NodeType);
// for(var i=startIndex; i<10; i++){
// console.log(list)
//   newList.push(list[i]);
// }

let page_list = student_list;///student_list will be subst with jsut: list
    const div = document.createElement('div')
    div.className = "pagination"
    list = document.querySelector('.page')
    list.appendChild(div)
    const ul = document.createElement('ul');
    div.appendChild(ul);
//console.log(div.parentNode);

    let numPages = Math.ceil(page_list.length / number_of_items)


    for(let i=1; i<=numPages; i++){
      let li = document.createElement('li');
      let span = document.createElement('span');////remove
//console.log(li.parentNode)//there is no parent at this point.

      if(list === i){
        span.innerHTML = '<a class="active" href="#">'+i+'</a>';
        li.addEventListener('click', (e) =>{
            //showPage(1, 2);

        })
      }
      else{
        span.innerHTML = '<a href="#">'+i+'</a>';//appendPageLinks
        //let textStuff = '<a href="#">'+i+'</a>';
//console.log(li.NodeType)
        //li.appendPageLinks('<a href="#">'+i+'</a>')
        ul.appendChild(li);
        li.appendChild(span);
        ul.appendChild(li);
      //ul.appendChild(li);
      }
      //span.innerHTML = '<a class="active" href="#">'+i+'</a>';

      ul.addEventListener('click', (e) =>{
console.log(e+ ' do something ' +e);
        //showPage(1, 2);
///          alert(e+ '  ' +e);
      })
    }


console.log(student_list.length+ " " +numPages)
}
//removeElement(elementID)
////   START HERE //////   THE ABOVE APPEARS TO BE WORKING Links work!
//only the active href should have the "active" class applied




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.
// function appendPageLinks(page){
//   let parent = document.querySelector('.page')
//   let div = document.createElement('div')
//   div.className = "pagination"
//   parent.appendChild(div);
//   div.appendChild();
//   let numPages = Math.ceil(student_list.length / number_of_items)
// //alert(numPages)
//     for(let i=1; i<=numPages; i++){
//       let li = document.createElement('li');
//       let span = document.createElement('span');
//     //  span.innerHTML = '<a class="active" href="http:www.google.com">'+i+'</a>';//they work
// //alert(numPages+ "   " + page)
//       if(page === i){
//         span.innerHTML = '<a class="active" href="#">'+i+'</a>';
//         //span.addEventListener('click'){
//           alert(li.a);
//       //  }
//       }
//       else{
//         span.innerHTML = '<a href="#">'+i+'</a>';
//       }
//       //span.innerHTML = '<a class="active" href="#">'+i+'</a>';
//       li.appendChild(span);
//       div.appendChild(li);
//     }
//
//
// console.log(student_list.length+ " " +numPages)
// }
