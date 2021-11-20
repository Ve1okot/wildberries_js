const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')

    const getData = () => {
        fetch('/db/db.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            getData()
        })
    })

    localStorage.setItem('data', JSON.stringify(['meow', 'bow-wow', 'woof']))

    JSON.parse(localStorage.getItem('data'))
}  

getGoods()