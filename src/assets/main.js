const url = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCNh_fIfC6DO90eDPIU0GFpw&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c00190517msh32048b89fed91bdp1976ffjsn6581d8d7ad7c',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

const content = document.getElementById('content');

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(url);
        let view = `
        ${videos.contents.map(video => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.video.thumbnails[2].url}" alt="${video.video.title}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.video.title}
            </h3>
          </div>
        </div>
        `).join('')}
        `;

        content.innerHTML = view;
    } catch (error) {
        console.error(error);
    }
})();