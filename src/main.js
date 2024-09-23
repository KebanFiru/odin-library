const myLibrary = []

const Button = document.getElementById("submit");
const Name = document.getElementById("name");
const Writer = document.getElementById("writer");
const Page = document.getElementById("page");
const Books = document.getElementById("books");


function book(name,page,writer){
    this.name = name;
    this.page = page;
    this.writer = writer;
}

Button.addEventListener('click', () => {
    if (Name.value != ''){
        let book_div = document.createElement("div");
        book_div.setAttribute("class", "book_div" );
        book_div.setAttribute("id", `${Name.value}`);
        var new_book = new book(Name.value, Page.value, Writer.value);
        myLibrary.push(new_book);
        book_div.innerHTML = `
        <div>
            <div>
                <p class="title">Name: ${Name.value}</p>
                <p class="author">Author: ${Writer.value} </p>
                <p class="pagecount">Page: ${Page.value}</p>
            </div>
            <div class="CardBottom">
                <button id= ${Name.value} class = "RemoveButton" >Remove</button>
            </div>   
        </div>`;
        Books.appendChild(book_div);
       }
    Name.value = "";
    Page.value = "";
    Writer.value = ""; 

    const RemoverButtons = document.getElementsByClassName("RemoveButton");
    Array.from(RemoverButtons).forEach((buttons) => {
        buttons.addEventListener("click", ()=>{
            if(document.getElementById(`${buttons.id}`)){
                const RemoveDiv = document.getElementById(`${buttons.id}`);
            RemoveDiv.remove();
            }
        })    
    });
});

