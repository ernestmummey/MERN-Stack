import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import {navigate} from '@reach/router'


const Dashboard = (props) => {
    const [author, setAuthor] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res=>setAuthor(res.data.authors))
        .catch(err=>console.log(err))
    })

    const onClickHandler = (id) => {
        navigate(`api/authors/update/${id}`)
    }

    const onDeleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/authors/:delete/${id}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    };


    return (
        <div className="container">
            <div className = "header">
                <h1>Favorite Authors</h1>
                <a href= "/api/authors/new" >Add an author</a>
                <p>We have quotes by:</p>
            </div>
            <div>
                <table className="table table-bordered table-striped mx-auto">
                    <thead>
                        <tr>
                            <th scope="col">Author</th>
                            <th scope="col">Actions available</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                author.map((name, key)=> {
                                    return(
                                        <tr>
                                            <td>{name.author}</td>
                                            <td className =" d-flex justify-content-center">
                                                <div className="mx-2">
                                                    <button type="submit" class="btn btn-primary" id= {key} onClick = {() => onClickHandler(name._id) }>Edit</button>
                                                </div>
                                                <div className="mx-2">
                                                    <button type="submit" class="btn btn-danger" id= {key} onClick = {() => onDeleteHandler(name._id)} >Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard