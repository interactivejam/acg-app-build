<template>
  <div v-editable="blok">
    <div class="row pt-5 pb-3">
      <div class="col-12 text-center">
        <p><strong>{{ blok.logo_headline }}</strong></p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <component :key="blok._uid"
                   v-for="blok in blok.logos"
                   :blok="blok"
                   :is="blok.component"></component>
      </div>
    </div>
  </div>
</template>

<script>
  let preview_token = 'nroV5bOcaS2CHUosOINLJgtt'

  axios.get(`https://api.storyblok.com/v1/cdn/links?token=${preview_token}`)
  .then((result) => {
    document.querySelector('#linksresponse').innerHTML = JSON.stringify(result.data, null, 2)
  })


  // view JSfiddle: https://jsfiddle.net/dominikangerer/ud2ydfah/8
let preview_token = 'nroV5bOcaS2CHUosOINLJgtt'
let per_page = 100
let page = 1
let all_links = []

// Call first Page of the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
axios.get(`https://api.storyblok.com/v1/cdn/links?token=${preview_token}&per_page=${per_page}&page=${page}`).then((res) => {
  // push all links into our all_links variable
  Object.keys(res.data.links).forEach((key) => {
    all_links.push(res.data.links[key])
  })

  // Check if there are more pages available otherwise thats all to do.
  const total = res.headers.total
  const maxPage = Math.ceil(total / per_page)
  if (maxPage <= 1) {
    return
  }

  // Since we know the total we now can pregenerate all requests we need to get all Links
  let contentRequests = []

  // we will start with page two since the first one is already done.
  for (let page = 2; page <= maxPage; page++) {
    contentRequests.push(axios.get(`https://api.storyblok.com/v1/cdn/links?token=${preview_token}&per_page=${per_page}&page=${page}`))
  }

  // Axios allows us to exectue all requests using axios.spread. We will then push our links into our all_links variable.
  axios.all(contentRequests).then(axios.spread((...responses) => {
    responses.forEach((response) => {
      Object.keys(response.data.links).forEach((key) => {
        all_links.push(response.data.links[key])
      })
    })

	// now we have all our links
	document.querySelector('#linksresponse').innerHTML = JSON.stringify(all_links, null, 2)
  }))
})
</script>
