'use strict';
$(document).ready(function(){

    $('#searchbutton').click(function(){

        let value = $('#userinput').val();

        $.ajax({
            url:  'https://api.tvmaze.com/search/shows?q=' + value,
            dataType: 'json',
            success: function(result){

                $('#results').empty();

                for(let i = 0; i < result.length; i++){
                    
                    const name = result[i].show.name;
                    const link = result[i].show.url;
                    let picture;

                    if(result[i].show.image === null){
                        picture = 'no picture';
                    } else{
                        picture = result[i].show.image.medium;
                    }

                    const summary = result[i].show.summary;
                    const genre = result[i].show.genres;

                    console.log(name, link, picture, summary, genre);

                    $('#results').append
                    ([
                        $('<div></div>',{'class': 'infoBox'}).append
                        ([
                            $('<div></div>', {'class': 'picBox'}).append
                            ([
                                $('<img>').attr('src', picture,)
                            ]),
                            $('<div></div>', {'class': 'textBox'}).append
                            ([
                                $('<h1></h1>').append(name),
                                $('<p></p>').append(genre),
                                $('<div></div>').append(summary),
                                $('<a>Official Site</a>').attr('href', link)
                            ])
                        ])
                    ]);
                }
            }
        })
    });
});
