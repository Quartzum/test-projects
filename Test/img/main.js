const headings = document.querySelectorAll('h2');
console.log('h2')

for(let item of headings){
    console.log(item);
    item.classList.add('red-text')
}