export const fetchData = (endpoint) => {
  return fetch(`https://mhw-db.com/${endpoint}`)
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        throw new Error(res.status);
      }
    })
}