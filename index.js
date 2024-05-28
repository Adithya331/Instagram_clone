var random = Math.floor(Math.random()*12 + 1) 
document.querySelector('.post').innerHTML = random
document.querySelector('.followers').innerHTML = Math.floor(Math.random()*1200 + 1)
document.querySelector('.following').innerHTML = Math.floor(Math.random()*2000 + 1)

fetch('https://randomuser.me/api').then(response=>{
    response.json().then(data=>{
        let user = data.results[0];
        document.querySelector('.top').innerHTML = user.name.first;
        document.querySelector('.name').innerHTML = user.name.first + ' ' + user.name.last;
        document.querySelector('.profile').src = user.picture.medium 
        for(var i=0; i<random;i++)
        {
            var imgg = document.createElement('img')
            imgg.src = 'https://picsum.photos/152' + i
            document.querySelector('.posts').append(imgg)
        }
    })
    }
)