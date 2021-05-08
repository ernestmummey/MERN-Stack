import React from 'react';
import {useState} from 'react';
import axios from 'axios'
import { navigate, Link } from '@reach/router';

const NewAuthors = (props) => {
    const[createAuthor, setCreateAuthor] = useState({
        author: " ",
    });
    const [errors, setErrors] = useState({
        author:" "
    })
    
    const onChangeHandler = (event) => {
        setCreateAuthor({...createAuthor,
            [event.target.name]: event.target.value 
        })
    }
    
    const onSubmitHandler = (event) => {
    event.preventDefault();
        axios.post('http://localhost:8000/api/authors/new',createAuthor)
        .then(res=> {
                if(res.data.authors){
                    navigate('/')
                }
                else{
                    setErrors(res.data.error.errors);
                }
            })
            .catch(err=>console.log(err))
    }
    
    return(
        <div className = "newContainer">
            <div className = "header">
                <h1>Favorite Authors</h1>
                <a href= "/" >Home</a>
                <p>Add a new author:</p>
            </div>
            <form onSubmit = {onSubmitHandler}>
                <div className="newAuthor">
                    <div className="d-flex justify-content-center  mx-auto mb-4">
                        <label htmlFor="input" className=" col-form-label">Name</label>
                        <div className="col-lg-5">
                            <input type="text" className="form-control" name="author" onChange={onChangeHandler}  />
                            {errors.author.message ? <span className = 'alert alert-danger'>{errors.author.message}</span> : ""}
                        </div>
                    </div>
                    <div className = "d-flex justify-content-center">
                        <div className="mx-2">
                        <Link to = '/'><button type="submit" class="btn btn-danger" >Cancel</button></Link> 
                        </div>
                        <div className="mx-2">
                            <button type="submit" class="btn btn-info">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
    }

export default NewAuthors