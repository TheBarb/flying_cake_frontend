export function getList() {
  // return fetch('http://localhost:3000/products.json')
    return fetch('http://localhost:1337/api/products?pagination[page]=1&pagination[pageSize]=50')
      .then(data => data.json())
  }