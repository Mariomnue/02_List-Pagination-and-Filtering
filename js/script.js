/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing
//showPage displays the truncated list based on the page number sent to it.
//it uses the list argument to generate the list of students to display.
//document.addEventListener('DOMContentLoaded', () => {//
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
      showPage(list, e.target.textContent)
      div.parentNode.removeChild(div)
      appendPageLinks(1, parseInt(e.target.textContent, 10));
  //excellent, links work! page reloads with proper content.
     })
  //console.log(student_list.length+ " <-num students,  num pages-> " +numPages)
  }

//Dynamically create and append a search bar.
// Avoid making any changes in the index.html file.
// You can reference the examples/example-exceeds.html file, lines 16-19,
//  to see an example of the markup you'll create.

// <!-- student search HTML to add dynamically -->
// // <div class="student-search">
// //   <input placeholder="Search for students...">
// //   <button>Search</button>
// // </div>
// <!-- end search -->


//  function searchForStudent(){

// const form = document.createElement('form');
// const searchField = document.createElement('input');
// const searchButton = document.createElement('button');
    const form = document.createElement('form');
    const input = document.createElement('input');
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

    form.addEventListener('submit', (e) =>{
      e.preventDefault();
      const text = input.value;
      input.value = '';
      alert(text)
    })





console.log(parentDiv);

// const editButton = document.createElement('button');
// editButton.textContent = "Edit";
// li.appendChild(editButton);

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const text = input.value;
//   input.value = '';
//   const li = createLI(text);
//   ul.appendChild(li);
// });
