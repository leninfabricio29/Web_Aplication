import React, { useEffect, useState } from 'react';
import NavbarAdmin from './adminComponents/admin'
import TableProducts from './adminComponents/tableProducts'
import { getCategories, isAuthenticated, createVideogame } from './apiCore'

const AddProduct = () => {
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    quantity: '',
    photo: '',
    loading: false,
    error: '',
    createdProduct: '',
    redirectToProfile: false,
    formData: ''
  })
  const { user, token } = isAuthenticated()
  const {
    name,
    description,
    price,
    categories,
    category,
    quantity,
    photo,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData
  } = values;



  function refreshPage() {
    window.location.reload(false);
  }


  const init = () => {
    getCategories().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({ ...values, categories: data, formData: new FormData() })
      }
    })
  }

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    init();
  }, []);

  const handleChange = name => event => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value
    formData.set(name, value)
    setValues({ ...values, [name]: value })
  }

  const showError = () => (
    <div
      className='alert alert-danger'
      style={{ display: error ? '' : 'none' }}
    >
      {error}
    </div>
  )

  const showSuccess = () => (
    <div
      className='alert alert-info'
      style={{ display: createdProduct ? '' : 'none' }}
    >
      <h2>{`${createdProduct} was succesfully created`}</h2>
    </div>
  )

  const showLoading = () =>
    loading && (
      <div className='alert alert-success'>
        <h2>Loading ...</h2>
      </div>
    )

  const clickSubmit = event => {
    event.preventDefault()
    setValues({ ...values, error: '', loading: true })
    createVideogame(user._id, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({
          ...values,
          name: '',
          description: '',
          photo: '',
          price: '',
          quantity: '',
          loading: false,
          createdProduct: data.name
        })
      }
    })
  }

  const newProducForm = () => (

    <div className="d-flex">
      <div className="card col-sm-4" >
        <div className="card-body " ></div>
        <form className="" onSubmit={clickSubmit} >

          <div style={
            {
              margin: "auto",
              width: "360px",
              alignItems: "center",
              justifyContent: "space-around"
            }
          }>



            <div className='form-group'>
              <label className='text-muted'>Nombre</label>
              <input
                onChange={handleChange('name')}
                type='text'
                className='form-control'
                value={name}
              />
            </div>
            <div className='form-group'>
              <label className='text-muted'>Descripcion</label>
              <input
                onChange={handleChange('description')}
                type='text'
                className='form-control'
                value={description}
              />
            </div>
            <div className='form-group'>
              <label className='text-muted'>Precio</label>
              <input
                onChange={handleChange('price')}
                type='text'
                className='form-control'
                value={price}
              />
            </div>
            <div className='form-group'>
              <label className='text-muted'>Categorias</label>
              <select
                onChange={handleChange('category')}
                type='text'
                className='form-control'
              >
                <option>Seleccione </option>
                {categories &&
                  categories.map((c, i) => (
                    <option key={i} value={c._id}>
                      {c.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className='form-group'>
              <label className='text-muted'>Stock</label>
              <input
                onChange={handleChange('quantity')}
                type='number'
                className='form-control'
                value={quantity}
              />
            </div>
            <div className='form-group'>
              <label className='text-muted'>Elige una foto</label><br />
              <br />
              <label className='btn btn-secondary'>
                <input
                  onChange={handleChange('photo')}
                  type='file'
                  name='photo'
                  accept='image/*'
                />
              </label>
            </div>
            <br />

            <button className='btn btn-outline-primary' >Crear Producto </button>

          </div>
        </form>

      </div>
      <TableProducts />


    </div>
  )

  return (
    <>
      <NavbarAdmin />
      {showLoading()}
      {showSuccess()}
      {showError()}
      {newProducForm()}
    </>
  )
}

export default AddProduct;