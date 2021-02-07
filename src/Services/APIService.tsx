export async function getData(urls: string[]) {
    try {
      let data = await Promise.all(
        urls.map(url => fetch(url)
          .then(response => response.json())
          .catch(error => ({ error, url }))
        )
      )
      return data;
      
    } catch (err) {
      console.log(err)
    }
  }
