Add buttons to the bottom of the page which show different sets of student info when it button is clicked
showPage Function :
  divide list into sections of 10. students 1-10 on page 1, students 11-20 on page 2.
  each section is displayed when the appropriate button is selected

  const showPage = (list, page) => {


  }

  const appendPageLinks  = (list) =>{
  1)  determine how many pages are needed for the list by dividing the total number of list items by the max number of items per pages

  2)  create a div, give it the "pagination" class and append it to the .page div

  3)  add a ul to the pagination div to stor the pagination links

  4) for every page, add li and a tags with the page number text

  5) add an event to each a tag. when they are cllicked call the showPage unction to display the appropriate page.

  6) loop over pagination links to remove active lass fro all links.

  7) add the active class to the link that was just clicked. you can identify that clicked link using event.target.
  

  }
