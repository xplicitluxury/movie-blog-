    const api_key = "api_key=013bcb9d6150436486f5bd77e26b5af2";
    const url = "/discover/movie?sort_by=popularity.desc";
    const base_url = "https://api.themoviedb.org/3/";
    const api_url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=013bcb9d6150436486f5bd77e26b5af2";
    const img_url = "https://image.tmdb.org/t/p/w500";
    const serch_url = "https://api.themoviedb.org/3/search/movie?api_key=013bcb9d6150436486f5bd77e26b5af2"
    const trailer = "/videos?api_key=013bcb9d6150436486f5bd77e26b5af2"
    let uhm;

    let show = document.getElementById("spacebox");
    let novArr = [ ];
    let secArry =[ ];




    fetch(api_url)
        .then((response) => response.json())
        .then((data) => {
            products = data.results
             uhm = products
            console.log(data.results);
            for (let index = 0; index < products.length; index++) {

                show.innerHTML += ` <div class="movie" id="movie">
            <img class="movie_img" src="${"https://image.tmdb.org/t/p/w500" + products[index].poster_path}" alt="" width="100%" height="200px">
            <div class="movie-info">
                <h3>${'Title:' + products[index].title}</h3>
                <small id="rating">${'Rating:' + products[index].vote_average}</small>
                <div><button onclick="bob(${index})" class="trailer_btn">Watch Trailer</button></div>
            </div>
            
        </div>`


            }
        });
        

    function malik() {
        show.innerHTML = ''
        let lol = document.getElementById('in-put')
        let sec = lol.value
        console.log(sec);
        fetch('https://api.themoviedb.org/3/search/movie?api_key=013bcb9d6150436486f5bd77e26b5af2&query=' + sec)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                con_tent = data.results
                hummu = con_tent;
                for (let index = 0; index < con_tent.length; index++) {

                    show.innerHTML +=  ` <div class="movie" id="movie">
                    <img class="movie_img" src="${"https://image.tmdb.org/t/p/w500" + con_tent[index].poster_path}" alt="" width="100%" height="200px">
                    <div class="movie-info">
                        <h3>${'Title:' + con_tent[index].title}</h3>
                        <small id="rating">${'Rating:' + con_tent[index].vote_average}</small>
                        <div><button onclick="brb(${index})" class="trailer_btn">Watch Trailer</button></div>
                    </div>
                    
                </div>`
                        


                }
            })
    }

    function bob(_do){
        novArr.push(uhm[_do].id)
        console.log(novArr);
        fetch("https://api.themoviedb.org/3/movie/"+ novArr + trailer)
        .then((response) => response.json())
        .then((data) => {
            bring = data.results
            console.log(bring);
            for (let index = 0; index < 1; index++) {
               show.innerHTML = `
               <div class="modal" id="modal">
               <div class="vido">
                   <iframe src="https://www.youtube.com/embed/${bring[index].key}" frameborder="0"></iframe>
               </div>
               <div class="overview">OVERVIEW:   ${uhm[_do].overview}</div>
                 <button class="close_btn" onclick="clo_se()">X</button>

           </div>
               `
            }
        });
        
    }
    function brb(_be){
        document.getElementById('movie').style.display = "block"
        secArry.push(hummu[_be].id)
        console.log(secArry);
        fetch("https://api.themoviedb.org/3/movie/"+ secArry + trailer)
        .then((response) => response.json())
        .then((data) => {
            toy = data.results
            console.log(toy);
            for (let index = 0; index < 1; index++) {
               show.innerHTML = `
               <div class="modal" id="modal">
               <div class="vido">
                   <iframe src="https://www.youtube.com/embed/${toy[index].key}" frameborder="0"></iframe>
               </div>
               <div class="overview">OVERVIEW:   ${hummu[_be].overview}</div>
                 <button class="close_btn" onclick="clo_se()">X</button>

           </div>
               `
            }
        });
        
    }
    function clo_se(){
            document.getElementById('modal').style.display = "none"
            location.reload()
    }


       