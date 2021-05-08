import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import {navigate} from '@reach/router'


const EditAuthors = (props) => {
    const [authorName, setAuthorName] = useState({
        author: " "
    });
    const [errors, setErrors] = useState({
        author:" "
    })

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${props.id}`,authorName)
        .then(res=>{
            if(res.data.authors){
                navigate('/')
            }
            else{
                setErrors(res.data.error.errors);
            }
        })
        .catch(err=>console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
        .then(res=>setAuthorName(res.data.authors))
        .catch(err=>console.log(err))
    },[props.id])


    const onChangeHandler = (event) => {
        setAuthorName({...authorName,
            [event.target.name]: event.target.value 
        })
        console.log(authorName)
    }


return(
    <div>
        <div className = "header">
            <h1>Favorite Authors</h1>
            <a href= "/" >Home</a>
            <p>Edit this author:</p>
        </div>
        <form onSubmit = {onSubmitHandler}>
            <div className="newAuthor">
                <div className="d-flex justify-content-center  mx-auto mb-4">
                    <label htmlFor="input" className=" col-form-label">Name</label>
                    <div className="col-lg-5">
                        <input type="text" className="form-control" name="author" value = {editPets.author} onChange={onChangeHandler}  />
                        {errors.author.message ? <span className="alert alert-danger">{errors.author.message}</span> : "" }
                    </div>
                </div>
                <div className = "d-flex justify-content-center">
                    <div className="mx-2">
                        <button type="submit" class="btn btn-danger" >cancel</button>
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

export default EditAuthors