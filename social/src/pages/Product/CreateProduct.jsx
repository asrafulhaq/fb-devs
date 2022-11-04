import React from 'react';
import { Link } from 'react-router-dom';

const CreateProduct = () => {
  return (
    <div className='container my-5'>
    <div className="row justify-content-center">
        <div className="col-md-5">
            <Link className='btn btn-primary' to="/admin/product">Back</Link>
            <br />
            <br />
            <div className="card product shadow-sm">
                <div className="card-body">
                <h2>Add new product</h2>
                <hr />
                <form action="">
                    <div className="my-3">
                        <label htmlFor="">Name</label>
                        <input className='form-control' type="text" />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Regular Price</label>
                        <input className='form-control' type="text" />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Sale Price</label>
                        <input className='form-control' type="text" />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Stock</label>
                        <input className='form-control' type="text" />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Photo</label>
                        <input className='form-control' type="file" />
                    </div>

                    <div className="my-3">
                        <label htmlFor=""></label>
                        <input className='btn btn-primary w-100' type="submit"  value='Create'/>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
};

export default CreateProduct;