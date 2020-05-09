/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing
//showPage displays the truncated list based on the page number sent to it.
//it uses the list argument to generate the list of students to display.
const student_list = document.getElementsByClassName("student-item cf");
const number_of_items = 10;
const showPage = (list, page) => {
list = student_list;//remove me later
  let startIndex = (page * number_of_items) - number_of_items;
  let endIndex = page * number_of_items;
  for(var i=0; i<list.length; i++){
    list[i].style.display = "none"
    if(i >= startIndex && i < endIndex){
      list[i].style.display = "block"
    }
  }
}

showPage(1, 1);///never send a 0;
appendPageLinks(1, 1);

//the appendPageLinks function builds the navigation buttons at the bottom.
function appendPageLinks(list, page){
  let startIndex = (page * number_of_items) - number_of_items;
  let endIndex = page * number_of_items;
  let page_list = student_list;///student_list will be subst with jsut: list
    const div = document.createElement('div')
    div.className = "pagination"
    list = document.querySelector('.page')//isn't this the same as student_list ?
    list.appendChild(div)
    const ul = document.createElement('ul');
    div.appendChild(ul);
    let numPages = Math.ceil(page_list.length / number_of_items)
    for(let i=1; i<=numPages; i++){
      let li = document.createElement('li');
      let span = document.createElement('span');////remove
        if(i === page){
          span.innerHTML = '<a class="active" href="#">'+i+'</a>';
        }
        else{
          span.innerHTML = '<a href="#">'+i+'</a>';//appendPageLinks
        }
      li.appendChild(span);
      ul.appendChild(li);
    }
    ul.addEventListener('click', (e) =>{
    showPage(1, e.target.textContent)
    div.parentNode.removeChild(div)
    appendPageLinks(1, parseInt(e.target.textContent, 10));
//excellent links work, page reloads with proper content.
   })
//console.log(student_list.length+ " <-num students,  num pages-> " +numPages)
}
