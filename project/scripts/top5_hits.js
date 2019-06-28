$(document).ready(function () {
    const url = 'https://raw.githubusercontent.com/luisdurante/frontend-intern-challenge/master/Assets/urls.json';

    $.getJSON(url, function (data) {
        data.sort((a, b) => parseInt(b.hits) - parseInt(a.hits));
        let k = 0;
        data.slice(0, 5).forEach(element => {
            let new_element = document.createElement('div');
            let url_element = document.createElement('span');
            let hits_element = document.createElement('span');
            $(new_element).addClass('clearfix');
            if (k == 4)
                $(new_element).addClass('linha_ultimo');
            else
                $(new_element).addClass('linha');

            $(url_element).text(element.url);
            $(url_element).addClass('top5_links');

            $(hits_element).text(element.hits);
            $(hits_element).addClass('top5_clicks');
            $(hits_element).addClass('pull-right');

            new_element.appendChild(url_element);
            new_element.appendChild(hits_element);
            document.getElementById('topfive').appendChild(new_element);
            k++;
        });

        let total_hits = 0;

        for (var i in data) {
            total_hits += parseInt(data[i].hits);
        }

        total_hits = total_hits.toLocaleString('pt-BR');
        let total_hits_element = document.createElement('p');
        $(total_hits_element).addClass('text-center');
        $(total_hits_element).addClass('total_hits');
        $(total_hits_element).text(total_hits)
        document.getElementById('all_clicks_container').appendChild(total_hits_element);
    });
})