const btn = document.querySelector('.btn');
const results = document.querySelector('.results');
const info = document.querySelector('.informations');

 function search(event){

  event.preventDefault()
    const apiKey = 'AIzaSyCDx-33kv3QDIPCC--8ZnHzJgGGcYFK4oI';
    const input = document.querySelector('.search').value;
     info.innerHTML = '';
     results.innerHTML = '';
    let result= [];
   
     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&videoEmbeddable=true&videoSyndicated=true&videoLicense=creativeCommon&key=${apiKey}&type=video&q=${input}`)
    .then((response) => response.json())
    .then(data =>{
         result = data.items; 
         informations(input)          
           let video =  result.map((item,index)=>`
                
                <div class='videoContainer' style='--delay:${index+1}00ms'>
                    <iframe width="420" height="315"
                      class='video'
                      src="https://www.youtube.com/embed/${item.id.videoId}?enablejsapi=1" 
                      frameborder="0";
                      autoplay; 
                      onYouTubeIframeAPIReady;
                      clipboard-write;
                      gyroscope; picture-in-picture" 
                      allowfullscreen>                     
                    </iframe>
                    <p><span style="font-weight:bold">Thumbnail: <img width="100px" src="${item.snippet.thumbnails.medium.url}"/></p>
                    <p><span style="font-weight:bold">Titulo: </span>${item.snippet.title}</p>
                    <p><span style="font-weight: bold">Publicado em: </span>${(item.snippet.publishedAt).slice(0,10)}</p>
                    <p><span style="font-weight: bold">Publicado por: </span>${item.snippet.channelTitle}</p>
                    <p><span style="font-weight:bold">Descrição: </span>${item.snippet.description===""?'Sem Descrição':item.snippet.description}</p>
                    
               </div>`)
                
                const videos = document.createElement('article');
                videos.setAttribute('class', 'article');
                videos.innerHTML = video;
                results.innerHTML='<h3>Videos referentes a sua busca:</h3>';
                results.appendChild(videos);  
                const footer = document.createElement('footer');
                footer.setAttribute('class','footer');
                footer.innerHTML = '<p>&#169; - 2021';
                results.appendChild(footer);
                document.querySelector('.search').value = '';
                     
        })  
};

function informations(band){
 
  const article = document.createElement('article');
  article.setAttribute('class', 'information');
  let information = '';
  info.innerHTML= '<div class=loading ></div>'

  fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${band}&apikey=uwk3vzZlQOho8rBXJHJdT9AE8Amf767z`)
  .then(response => response.json())
    .then((data) => {     
      information = data._embedded.attractions[0]
      article.innerHTML = `
                          <div class=imageInformation>
                              <img src='${information.images[6].url}' alt='${information.id}'/>
                          </div>

                          <div class='textInformation'>
                                <p>
                                  <span style='font-weight:bold'>Nome: </span>${information.name}
                                </p>
                                <p>
                                   <span style='font-weight:bold'>Gênero: </span>${information.classifications[0].genre.name}
                                </p>
                                 <p>
                                    <span style='font-weight:bold'>Segmento: </span>${information.classifications[0].segment.name}
                                 </p>

                                  <div class='social'>
                                      <p style='font-weight:bold'>Redes sociais e contato:</p>
                                      <ul>
                                          <li><span style='font-weight=bold'>Facebook: </span><br><a href='https://www.facebook.com/${(information.name).replace(" ","")}' target='blank'>https://www.facebook.com/${information.name}</a></li>
                                          <li><span style='font-weight=bold'>Twitter: </span><br><a href='https://twitter.com/${(information.name).replace(" ","")}' target='blank'>https://twitter.com/${information.name}</a></li>
                                          <li><span style='font-weight=bold'>Instagram: </span><br><a href='https://www.instagram.com/${(information.name).replace(" ","")}' target='blank'>https://twitter.com/${information.name}</a></li>
                                          <li><span style='font-weight=bold'>YouTube: </span><br><a href='https://www.youtube.com/user/${(information.name).replace(" ","")}' target='blank'>https://www.youtube.com/user/${information.name}</a></li>
                                       
                                       </ul>
                                 </div>`;
         
          info.innerHTML='';   
      info.appendChild(article);
      
    }).catch((error)=>{
      info.innerHTML = '<h4 class = "error"><i class="fas fa-exclamation-circle"> </i>informações adicionais da sua busca não encontradas, tente outro termo de busca!</h4>'
      setTimeout(()=>info.innerHTML = '<h3 style="color:red"><i class="fas fa-exclamation-circle"> </i></h3>',10000)
    })
    

}

btn.addEventListener('click', search);
