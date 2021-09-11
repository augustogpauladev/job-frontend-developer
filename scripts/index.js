const btn = document.querySelector('.btn');
const results = document.querySelector('.results');
const info = document.querySelector('.informations');
 function search(event){

  event.preventDefault()
    const apiKey = 'AIzaSyCDx-33kv3QDIPCC--8ZnHzJgGGcYFK4oI';
    const input = document.querySelector('.search').value;
     
    let result= [];
    
    
    
if (!input) return null
     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${apiKey}&type=video&q=${input}`)
    .then((response) => response.json())
    .then(data =>{
         result = data.items; 
         informations(input)          
           let video =  result.map((item)=>`
           
                <div>
                    <iframe width="420" height="315"
                      src="https://www.youtube.com/embed/${item.id.videoId}" 
                      frameborder="0";
                      autoplay; 
                      clipboard-write;
                      gyroscope; picture-in-picture" 
                      allowfullscreen>
                    </iframe>

                    <p><span style="font-weight:bold">Titulo: </span>${item.snippet.title}</p>
                    <p><span style="font-weight: bold">Publicado em: </span>${(item.snippet.publishedAt).slice(0,10)}</p>
                    <p><span style="font-weight: bold">Publicado por: </span>${item.snippet.channelTitle}</p>
                    <p><span style="font-weight:bold">Descrição: </span>${item.snippet.description===""?'Sem Descrição':item.snippet.description}</p>
                    <p><span style="font-weight:bold">Thumbnail: <img width="100px" src="${item.snippet.thumbnails.medium.url}"/></p>
           
               </div>`)
                const videos = document.createElement('article') ;
                videos.innerHTML = video  
        results.appendChild(videos)
        ;
           
        })  
};



function informations(band){
 
  const article = document.createElement('article');
  article.setAttribute('class', 'information');
  let information = '';
 

  fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${band}&apikey=uwk3vzZlQOho8rBXJHJdT9AE8Amf767z`)
  .then(response => response.json())
    .then((data) => {
     
      information = data._embedded.attractions[0]
      console.log('DEU CERTO');
      
      article.innerHTML = `
                          <div class=imageInformation>
                              <img src='${information.images[6].url}' alt='${information.id}'/>
                          </div>

                          <div>
                               <span style='font-weight:bold'>Nome: </span>${information.name}
                                <p>
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
                                        <li>Facebook: <a href='${information.externalLinks.facebook[0].url}' target='blanc'>${information.externalLinks.facebook[0].url}</a></li>
                                        <li>Instagram: <a href='${information.externalLinks.instagram[0].url}' target='blanc'>${information.externalLinks.instagram[0].url}</a></li>
                                       <li>Twitter: <a href='${information.externalLinks.twitter[0].url}' target='blanc'>${information.externalLinks.twitter[0].url}</a></li>
                                        <li>Youtube: <a href='${information.externalLinks.youtube[0].url}' target='blanc'>${information.externalLinks.youtube[0].url}</a></li>
                                       <li>Wiki: <a href='${information.externalLinks.wiki[0].url}' target='blanc'>${information.externalLinks.wiki[0].url}</a></li>
                                      </ul>
                                 </div>

                            </div>
                              
                              
                          `;
      info.appendChild(article);
      
    })
    

}

btn.addEventListener('click', search);
