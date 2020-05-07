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

function showPage(list, page){
let startIndex = (page * number_of_items) - number_of_items;
let endIndex = page * number_of_items;
//console.log(startIndex+ "    " +endIndex);
  for(var i=0; i<student_list.length; i++){
    student_list[i].style.display = "none"
    if(i >= startIndex && i < endIndex){
      student_list[i].style.display = "block"
    }
  }
}

showPage(1, 1);///never send a 0;
pagination(1);
function pagination(list){
  let parent = document.querySelector('.page')
  let div = document.createElement('div')
  div.className = "pagination"
  parent.appendChild(div);

  let numPages = Math.ceil(student_list.length / number_of_items)
for(let i=1; i<= numPages; i++){
  let li = document.createElement('li');
  let span = document.createElement('span');
//  span.innerHTML = '<a class="active" href="http:www.google.com">'+i+'</a>';//they work
  span.innerHTML = '<a class="active" href="#">'+i+'</a>';
  li.appendChild(span);
  div.appendChild(li);
}

////   START HERE //////   THE ABOVE APPEARS TO BE WORKING UNSURE OF THE LINKS


        // let li = document.createElement('li');
        // let span = document.createElement('span');
        // span.innerHTML = '<a class="active" href="#">1</a>';
        // li.appendChild(span);
        // div.appendChild(li);
  //Str +='li';
   //li.appendChild('<a class="active" href="#">1</a>');//add the href
  // li.appendChild('<a class="active" href="#">2</a>');//add the href
  // li.appendChild('<a class="active" href="#">3</a>');//add the href
  // li.appendChild('<a class="active" href="#">4</a>');//add the href
  // li.appendChild('<a class="active" href="#">5</a>');//add the href
  // li.appendChild('<a class="active" href="#">6</a>');//add the href
console.log(student_list.length+ " " +numPages)
}




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.
