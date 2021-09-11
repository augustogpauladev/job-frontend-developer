const btn = document.querySelector('.btn');
const results = document.querySelector('.results');

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
                        
        results.innerHTML = video;
        // informations('u2');
           
        })  
};

btn.addEventListener('click', search);

function informations(a){

  const article = document.createElement('article');
  article.setAttribute('class', 'information');
  let information = '';
  const input = document.querySelector('.search').value;

  fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${a}&apikey=uwk3vzZlQOho8rBXJHJdT9AE8Amf767z`)
  .then(response => response.json())
    .then((data) => {
     
     information = data._embedded.attractions[0]
      console.log(information.name);
      article.innerHTML = `${information.name}`;
      results.appendChild(article);
    })
    

}
 informations('nirvana');

// const dados = {
//     "kind": "youtube#searchListResponse",
//     "etag": "ZsI7L_OE3NlYz3vEnHM0cXRcePs",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "BR",
//     "pageInfo": {
//       "totalResults": 5051,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "6WCem4kCzgSv6HPYhFrvnvraX3Q",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "82uTuWxTJS4"
//         },
//         "snippet": {
//           "publishedAt": "2020-01-26T17:31:49Z",
//           "channelId": "UC0fGycccXWcPvOWgjKPO8dQ",
//           "title": "Iron Maiden - Greatest hits Vol. 1",
//           "description": "01 The number of the beast 00:00 02 The trooper 04:52 03 Be quick or be dead 09:05 04 Aces high 12:27 05 Fear of the dark 16:59 06 Run to the hills 24:13 07 ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/82uTuWxTJS4/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/82uTuWxTJS4/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/82uTuWxTJS4/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Jorge Gonzalez",
//           "liveBroadcastContent": "none",
//           "publishTime": "2020-01-26T17:31:49Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "exXPu-mOZ8UFsjbNVlnfkfU_lEM",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "J0N1yY937qg"
//         },
//         "snippet": {
//           "publishedAt": "2007-02-05T14:33:32Z",
//           "channelId": "UCTUcvNyuFrtDYxyMnuUBSmA",
//           "title": "Iron maiden - fear of the dark",
//           "description": "visit my channel for more iron maiden videos.",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/J0N1yY937qg/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/J0N1yY937qg/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/J0N1yY937qg/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hassan .Waiel",
//           "liveBroadcastContent": "none",
//           "publishTime": "2007-02-05T14:33:32Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "NcwtwbSn6sqb7HmqwTnN90sHnH4",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "X4bgXH3sJ2Q"
//         },
//         "snippet": {
//           "publishedAt": "2015-08-07T13:36:55Z",
//           "channelId": "UCaisXKBdNOYqGr2qOXCLchQ",
//           "title": "Iron Maiden - The Trooper (Official Video)",
//           "description": "The Official Video for Iron Maiden - The Trooper Iron Maiden's 17th studio album 'Senjutsu' Is out now - https://ironmaiden.lnk.to/Senjutsu Taken from Iron ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/X4bgXH3sJ2Q/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/X4bgXH3sJ2Q/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/X4bgXH3sJ2Q/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Iron Maiden",
//           "liveBroadcastContent": "none",
//           "publishTime": "2015-08-07T13:36:55Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "C3O63hyUFFx2yCcTPbgOHR9da7U",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "0spzZ3o8wFg"
//         },
//         "snippet": {
//           "publishedAt": "2021-08-30T14:35:47Z",
//           "channelId": "UCI9nZLC4vnfwpm5y0aHW9nw",
//           "title": "#ironmaidem #brucedikcsom novo álbum (The Writing on the Wall)",
//           "description": "",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/0spzZ3o8wFg/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/0spzZ3o8wFg/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/0spzZ3o8wFg/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "motions_88",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-08-30T14:35:47Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "DlRUMNojFEDi9sRkClHbr-Vd6Ps",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "FhBnW7bZHEE"
//         },
//         "snippet": {
//           "publishedAt": "2021-07-15T17:00:12Z",
//           "channelId": "UCaisXKBdNOYqGr2qOXCLchQ",
//           "title": "Iron Maiden – The Writing On The Wall (Official Video)",
//           "description": "The official music video for Iron Maiden – The Writing On The Wall Taken from Iron Maiden's 17th studio album 'Senjutsu' Out now: ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/FhBnW7bZHEE/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/FhBnW7bZHEE/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/FhBnW7bZHEE/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Iron Maiden",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-07-15T17:00:12Z"
//         }
//       }
//     ]
//   }
//   console.log(dados.items.map((item)=>`<p>${(item.snippet.channelTitle)}</p>`) )