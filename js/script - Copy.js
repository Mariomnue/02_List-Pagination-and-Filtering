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

  //the appendPageLinks function builds the navigation buttons at the bottom.
  function appendPageLinks(list, page){
      let page_list = student_list;///student_list will be subst with jsut: list
      const div = document.createElement('div')
      div.className = "pagination"
      list = document.querySelector('.page')//isn't this the same as student_list it's an HTML Collection
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
//append the addEventListener
    form.addEventListener('submit', (e) => {
			e.preventDefault();
			const text = input.value;
      searchForStudent(text);
      input.value = '';//clear it out after its been used.
		});

//global variable that is necessary for the setSubset access.
    function searchForStudent(text){
      const nDiv = document.querySelector('.page');
      //let nlist = document.querySelectorAll('h3');//student_list{ul}.student-item cf{li}.student-details{div};//do not mess with this
      const ul = document.createElement('ul');
      ul.className = 'student-list'



moveUl = parentDiv.parentNode.firstElementChild.nextSibling;
console.log(moveUl);
nDiv.insertBefore(ul, moveUl)



      nDiv.appendChild(ul);

      const searchString = text;//input from user
      for (var k=0; k<searchString.length; k++){//start with searching the input string one char at a time.
        for(var i=0; i<student_list.length; i++){//for(student in list);search each student in list
          //let item = student_list[i];//set item to the content of
          let item = student_list[i].textContent;
            setSubset(item);//call the subset maker and return out if it matches
            //nlist.appendChild(span);
        }

      }
//setSubset function is used to escape the nested for-loop in the searchForStudent function
//Leave this function alone. it fetches a matching student data and returns it.
  function setSubset(item){
    for(var j=0; j<item.length; j++){//for char in student
      if(searchString[k] === item[j]){
      let li = document.createElement('li');
      li.innerHTML = student_list[i].innerHTML;
      li.className = 'student-details';
      ul.appendChild(li);//append to ul the new student-details in li
//console.log(student_list+ ' newList: ' +newList);
      return ul;//job done return to caller
      }
    }
  }
//we are still in the searchForStudent function;
//console.log(nDiv);
 let oldUl = nDiv.getElementsByClassName('student-list');//this gives two uls i'm looking for.
 let mNew = oldUl[0]//this is the new list in html innerHTML format;
//mNew.parentNode;
//need to swap out the oldUl[0] with new new oldUl[1]
//let path = mNew.parentNode.firstElementChild.nextSibling;

//path.insertBefore(oldUl, mNew.parent.firstElementChild.nextSibling)

//console.log(mNew.parentNode.firstElementChild.nextSibling);
  showPage(mNew)//out with the old, in with the new;
}
///////////  DON'T BREAK ME!
//     function searchForStudent(text){
//       list = document.querySelectorAll('h3');
//       let newList = [];
//       const searchString = text;//input from user
//       for (var k=0; k<searchString.length; k++){//start with searching the input string one char at a time.
//         for(var i=0; i<list.length; i++){//for(student in list);search each student in list
//           let item = list[i].textContent;
//           for(var j=0; j<item.length; j++){//for char in student
//             if(searchString[k] === item[j]){
// console.log(searchString);
//               newList.push(list[i])
// console.log(newList[0].innerHTML+ "  " +newList.length);
//             }
//           }
//         }
// console.log(newList[1].innerHTML);
//       }
///////////  end DON'T BREAK ME!

//need to loop through each element in the list;
  //then loop through each elements content
  //and compare it to the search field

//m = 19
//ma = 83
//mar = 150
//mary = 158

    // }
    //
    // const showPage = (list, page) => {
    // list = student_list;//remove me later
    // let startIndex = (page * number_of_items) - number_of_items;
    // let endIndex = page * number_of_items;
    //   for(var i=0; i<list.length; i++){
    //     list[i].style.display = "none"
    //     if(i >= startIndex && i < endIndex){
    //       list[i].style.display = "block"
    //     }
    //   }
     //}
