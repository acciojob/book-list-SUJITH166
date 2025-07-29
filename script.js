//your JS code here. If required.\
const form=document.getElementById('form');
const titleInput=document.getElementById("title");
const authorInput=document.getElementById('author');
const isbnInput=document.getElementById('isbn');
const booklist=document.getElementById('book-list')

// let error=[];
form.addEventListener('submit',function(e){
	e.preventDefault();
	const title=titleInput.value.trim();
const author=authorInput.value.trim();
const isbn=isbnInput.value.trim();

	 const row=document.createElement('tr');
	  const firstCell = document.createElement('td');
    firstCell.textContent = `${title}`; 
	const secondCell = document.createElement('td');
    secondCell.textContent = `${author}`; 
	const thirdCell = document.createElement('td');
    thirdCell.textContent = `${isbn}`; 
	const removeaction=document.createElement('td')
	const remove=document.createElement("button");
	remove.classList.add('delete');
	remove.textContent='Remove';

	remove.addEventListener('click',function(){
		booklist.removeChild(row)
	})
	// removeaction.appendChild(remove);
	row.appendChild(firstCell);
	row.appendChild(secondCell);
	row.appendChild(thirdCell);
	row.appendChild(remove);

		booklist.appendChild(row);

	titleInput.value="";
	authorInput.value="";
	isbnInput.value="";
});

// if(!title)error.push("Enter all value");
// if(!author)error.push("Enter all value");
// if(!isbn)error.push("Enter all value");

// if(error.length>0)
// {
	
// }





