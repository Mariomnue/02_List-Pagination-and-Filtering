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
  //global variable that is necessary for the setSubset access.
  let newList = [];//find a way to put this inside the function
  //newList is used by function listMaker to build the pagination list;
//  const list = student_list;//remove me later
  const showPage = (list, page) => {
    list = student_list;//remove me later
    let startIndex = (page * number_of_items) - number_of_items;
    let endIndex = page * number_of_items;
      function listMaker(){
        for(var i=0; i<10; i++){
          newList.push[i]
        }
      }
      listMaker();
  //console.log("old: " +list.length+ "new: " +newList.length);
      for(var i=0; i<list.length; i++){
        list[i].style.display = "none"
        if(i >= startIndex && i < endIndex){
          list[i].style.display = "block"
        }
      }
      if(!page){
        let page = 1;
      }
      //appendPageLinks(list, page)
  }

  showPage(1, 1);///never send a 0;
  appendPageLinks(1, 1);

//borrowed from brunomarchir/list-pagination-and-filtering// thanks brunomarchir.
  const reset= () => {
    divPagination.innerHTML = "";
  }//borrowed from brunomarchir/list-pagination-and-filtering// thanks brunomarchir.

  //the appendPageLinks function builds the navigation buttons at the bottom.
  function appendPageLinks(list, page){
      let page_list = student_list;///student_list will be subst with jsut: list
      // const div = document.createElement('div')
      // div.className = "pagination"
      list = document.querySelector('.page')//isn't this the same as student_list it's an HTML Collection
      list.appendChild(divPagination)
      const ul = document.createElement('ul');
      divPagination.appendChild(ul);
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
      showPage(list, e.target.textContent)
reset();
      //divPagination.parentNode.removeChild(divPagination)
      appendPageLinks(1, parseInt(e.target.textContent, 10));
     })


  }


//  function searchForStudent(){
//starts with building the search element and event
//below are document elements not in a function.
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

//borrowed from brunomarchir/list-pagination-and-filtering// thanks brunomarchir.
    //create 'no results' message
    noResults = document.createElement('h2');
    noResults.textContent = "Sorry, no results have been found.";
    searchDiv.appendChild(noResults);
    noResults.style.display = 'none';
//borrowed from brunomarchir/list-pagination-and-filtering// thanks brunomarchir.


    function searchForStudent(text){

      const nDiv = document.querySelector('.page');
      //let nlist = document.querySelectorAll('h3');//student_list{ul}.student-item cf{li}.student-details{div};//do not mess with this
      const ul = document.createElement('ul');
      ul.className = 'student-list'

// moveUl = parentDiv.parentNode.firstElementChild.nextSibling;
// console.log(moveUl);
// nDiv.insertBefore(ul, moveUl)

      nDiv.appendChild(ul);

//borrowed from brunomarchir/list-pagination-and-filtering// thanks brunomarchir.
      noResults.style.display = ('none');
      const filteredList = [];

      const searchString = text;//input from user
      for(var k=0; k<student_list.length; k++){
        if(student_list[k].innerHTML.includes(input.value.toLowerCase())){
          student_list[k].style.display = ('');
          filteredList.push(student_list[k]);
        }else{
          student_list[k].style.display = ('none');
        }
      }

      if (filteredList.length == 0){
        noResults.style.display = ('');
      }

reset();
showPage(filteredList, 1);
appendPageLinks(filteredList);
//borrowed from brunomarchir/list-pagination-and-filtering// thanks brunomarchir saved me 12 lines of code that sorta worked.

}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  searchForStudent(text);
  input.value = '';//clear it out after its been used.
});
