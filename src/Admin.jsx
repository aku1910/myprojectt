import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const url = 'https://northwind.vercel.app/api/suppliers';
  const [data, setData] = useState([]);
  const [product, setProduct] = useState({
    id: '',
    companyName: '',
    contactName: '',
    contactTitle: ''
  });

  const fetchData = () => {
    axios.get(url)
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  };

  const nameChange = (e) => {
    setProduct({ ...product, companyName: e.target.value });
  };

  const contactChange = (e) => {
    setProduct({ ...product, contactName: e.target.value });
  };

  const titleChange = (e) => {
    setProduct({ ...product, contactTitle: e.target.value });
  };

  const deleteProduct = (id) => {
    axios.delete(`${url}/${id}`)
      .then(() => fetchData())
      .catch(error => console.error('Error deleting product: ', error));
  };

  const addOrUpdateProduct = (e) => {
    e.preventDefault();
    if (product.id) {
      editProduct(product);
    } else {
      addProduct(product);
    }
  };

  const editProduct = (editedProduct) => {
    axios.put(`${url}/${editedProduct.id}`, editedProduct)
      .then(() => {
        fetchData();
        setProduct({
          id: '',
          companyName: '',
          contactName: '',
          contactTitle: ''
        });
      })
      .catch(error => console.error('Error editing product: ', error));
  };

  const addProduct = (newProduct) => {
    axios.post(url, newProduct)
      .then(() => {
        fetchData();
        setProduct({
          id: '',
          companyName: '',
          contactName: '',
          contactTitle: ''
        });
      })
      .catch(error => console.error('Error adding product: ', error));
  };

  const editProductData = (product) => {
    setProduct(product);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='adminpanel'>
      <form onSubmit={addOrUpdateProduct}>
        <input type='text' value={product.companyName} onChange={nameChange} placeholder='Company Name' />
        <input type='text' value={product.contactName} onChange={contactChange} placeholder='Contact Name' />
        <input type='text' value={product.contactTitle} onChange={titleChange} placeholder='Contact Title' />
        <button type='submit'>{product.id ? 'Edit' : 'Add'}</button>
      </form>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Company Name</th>
            <th>Contact Name</th>
            <th>Contact Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.companyName}</td>
              <td>{item.contactName}</td>
              <td>{item.contactTitle}</td>
              <td>
                <button onClick={() => editProductData(item)}>Edit</button>
                <button onClick={() => deleteProduct(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
