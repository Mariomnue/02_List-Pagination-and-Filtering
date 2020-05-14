/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

//document.addEventListener('DOMContentLoaded', () => {//
////REMB every list is a subset of this master list.
////if the list ever comes from outside the html this will need to change
  const student_list = document.getElementsByClassName("student-item cf");
  const number_of_items = 10;
  const divPagination = document.createElement('div')
  divPagination.className = "pagination"
  const showPage = (list, page) => {
    list = student_list;//remove me later
    let startIndex = (page * number_of_items) - number_of_items;
    let endIndex = page * number_of_items;
      for(var i=0; i<student_list.length; i++){
        if(i >= startIndex && i < endIndex){
          student_list[i].style.display = '';
        }else{
          student_list[i].style.display = "none"
        }
      }
  }
  showPage(1, 1);///never send a 0;
  appendPageLinks(1);

//below borrowed from brunomarchir/list-pagination-and-filtering// thanks brunomarchir.
    const reset= () => {
    divPagination.innerHTML = "";
    }//borrowed from brunomarchir/list-pagination-and-filtering// thanks brunomarchir.

  //the appendPageLinks function builds the navigation buttons at the bottom of the stage.
  function appendPageLinks(page){
console.log('page: '+page.length);
      const newlist = document.querySelector('.page')//isn't this the same as student_list it's an HTML Collection
      newlist.appendChild(divPagination)
      const ul = document.createElement('ul');
      divPagination.appendChild(ul);


      let numPages = Math.ceil(page.length / number_of_items)


      for(let i=1; i<=numPages; i++){
console.log('For loop i: '+i);
        let li = document.createElement('li');
        let span = document.createElement('span');////remove
          if(i == page){
            span.innerHTML = '<a class="active" href="#">'+i+'</a>';
          }
          else{
            span.innerHTML = '<a href="#">'+i+'</a>';
          }
        li.appendChild(span);
        ul.appendChild(li);
      }
      ul.addEventListener('click', (e) =>{
      showPage(newlist, e.target.textContent)
      reset();
      noResults.style.display = 'none';
      appendPageLinks(e.target.textContent);
     })
  }

//  function searchForStudent(){
//starts with building the search element and event
//below are document elements not in a function.
//Create the form, input field, and buttons
//append everything together.
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.placeholder = "Search for students...";
    const searchButton = document.createElement('button');
    form.appendChild(input);
    form.appendChild(searchButton);
    searchButton.textContent = "Search";
    const parentDiv = document.querySelector('.page-header');
    const searchDiv = document.createElement('div')
    searchButton.className = "student-search";
    searchDiv.className = "student-search";
    parentDiv.appendChild(searchDiv);
    searchDiv.appendChild(form);

//Display no Results when needed.
//below borrowed from brunomarchir/list-pagination-and-filtering// thanks brunomarchir.
    //create 'no results' message
    noResults = document.createElement('h2');
    noResults.textContent = "Sorry, no results have been found.";
    searchDiv.appendChild(noResults);
    noResults.style.display = 'none';
//borrowed from brunomarchir/list-pagination-and-filtering// thanks brunomarchir.
    function searchForStudent(text){
//below borrowed from brunomarchir/list-pagination-and-filtering// thanks brunomarchir.
      noResults.style.display = ('none');
      const filteredList = [];
      const searchString = text;//input from user
      for(var k=0; k<student_list.length; k++){
//console.log(student_list[k].firstElementChild.firstElementChild.nextSibling.nextSibling);
      const student = student_list[k].firstElementChild.firstElementChild.nextSibling.nextSibling
        if(student.innerHTML.includes(input.value.toLowerCase())){//if any part of student contains the input value
          student_list[k].style.display = ('');//show student;
          filteredList.push(student_list[k]);// push student to filtered list
//console.log('before:  '+filteredList.length+ "student: " +student_list[k].innerHTML);
        }else{
          student_list[k].style.display = ('none');//else hide student;
        }

      }
      if (filteredList.length == 0){
        noResults.style.display = ('');
      }
console.log('after:  '+filteredList.length);
reset();
appendPageLinks(filteredList);
//borrowed from brunomarchir/list-pagination-and-filtering// thanks brunomarchir saved me 12 lines of code that sorta worked.

}

form.addEventListener('submit', (e) => {
  noResults.style.display = 'none';
  e.preventDefault();
  const text = input.value;
  searchForStudent(text);
  input.value = '';//clear it out after its been used.
});
