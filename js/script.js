/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

//document.addEventListener('DOMContentLoaded', () => {//
////REMB every list is a subset of this master list.
  const student_list = document.getElementsByClassName("student-item cf");
  const filteredList = document.getElementsByClassName("student-item cf");//move to the top with description

  const number_of_items = 10;
  const divPagination = document.createElement('div')
    divPagination.className = "pagination"
  let target = "";
  const showPage = (list, page) => {//start of showPage function
  let startIndex = (page * number_of_items) - number_of_items;
  let endIndex = page * number_of_items;

    if(list >= 1){//number 1 is a filter for the list. if it doesn't exist or is the normal student_list then this number is 1.
      for(var i=0; i<student_list.length; i++){
        if(i >= startIndex && i < endIndex){
          student_list[i].style.display = ('');//if student is on this list then show them
        }else{
          student_list[i].style.display = ("none")//else hide
        }
      }
      appendPageLinks(student_list);
    }
    if(page == -2){//the page number here (-2) is coming from the searchForStudent function.
      for(var i=0; i<filteredList.length; i++){
        if(i >= startIndex && i < endIndex){
          filteredList[i].style.display = ('');//if student is on this list then show them
        }else{
          filteredList[i].style.display = ("none")//else hide
        }
      }
      appendPageLinks(filteredList);
    }

  }



//below borrowed from brunomarchir/list-pagination-and-filtering// thanks brunomarchir.  This has undergone change from brunomarchir original
    const reset= () => {
      divPagination.innerHTML = "";
    }

//the appendPageLinks function builds the navigation buttons at the bottom of the stage.
//This function is called from showPage function only.
  function appendPageLinks(list){////This should be a list not a page number
//let list = list;
console.log('appendPageLinks List.length: '+list.length);
//divParent isn't the same as student_list it's an HTML Collection
//it is used to place the paginatioin links at the bottom.
      const divParent = document.querySelector('.page')
      divParent.appendChild(divPagination)
      const ul = document.createElement('ul');
      divPagination.appendChild(ul);
      let numPages = Math.ceil(list.length / number_of_items)

      for(let i=1; i<=numPages; i++){
        let li = document.createElement('li');
        let span = document.createElement('span');////remove
          if(target === ""){//used to catch the error that is thrown.
            target = 1;
          }
          if(i == target){
            span.innerHTML = '<a class="active" href="#">'+i+'</a>';
          }
          else{
            span.innerHTML = '<a href="#">'+i+'</a>';
          }
        li.appendChild(span);
        ul.appendChild(li);
      }
//######## DON'T TOUCH THIS
//########  append the clickies to the pagination buttons
      ul.addEventListener('click', (e) =>{//This is appending the links
        reset();
        target = e.target.textContent;
        showPage(1, e.target.textContent)
        noResults.style.display = 'none';
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
//below borrowed from brunomarchir/list-pagination-and-filtering// thanks brunomarchir.  This has undergone change from brunomarchir original
    //create 'no results' message
    noResults = document.createElement('h2');
    noResults.textContent = "Sorry, no results have been found.";
    searchDiv.appendChild(noResults);
    noResults.style.display = ('none');
//borrowed from brunomarchir/list-pagination-and-filtering// thanks brunomarchir.



    function searchForStudent(text){
//below borrowed from brunomarchir/list-pagination-and-filtering// thanks brunomarchir.  This has undergone change from brunomarchir original
      let inputVal = text;
      let cnt = 0; //count the number of matches;
      noResults.style.display = ('none');
      const searchString = text;//input from user

      for(var k=0; k<filteredList.length; k++){
        const student = filteredList[k].firstElementChild.firstElementChild.nextSibling.nextSibling///this targets the h3 element

          if(student.innerHTML.includes(inputVal.toLowerCase())){//if any part of student contains the input value
            //filteredList[k] =
            filteredList[k].style.display = ('block');//show student;
            cnt+=1;

          }else{
            filteredList[k].style.display = ("none");//else hide student;
          }
        }
      if(cnt < 1){
        noResults.style.display = ('');
      }else if(cnt > 0 && cnt < 10){
        reset();//remove the pagination
      }
      else{
        showPage(filteredList, -2);//filter this list to only show needed ones
      }
    }

form.addEventListener('submit', (e) => {
  noResults.style.display = 'none';
  e.preventDefault();
  const text = input.value;
  input.value = '';//clear it out after its been used.
  searchForStudent(text);
});

showPage(1, 1);///never send a 0;
