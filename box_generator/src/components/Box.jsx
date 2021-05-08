import React, {useState} from 'react'


const Box = (props) => {
    const [selectedColor, setSelectedColor] = useState([])
    const [form, setForm] = useState("")

    const prevent = (e) => {
        e.preventDefault();
        console.log(form);


        setSelectedColor([...selectedColor, form]);

        setForm("");
    }


    return(
        <div>
            <form onSubmit = {prevent}>
                <div className="mt-5 pt-5 d-flex justify-content-center">
                    <label for="colFormLabel" className=" col-form-label-lg">Color</label>
                    <div className="col-sm-5">
                        <input type="text" onChange={ (e) => setForm(e.target.value)} className="form-control form-control-lg" value={form} ></input>
                    </div>
                    <div className = 'mt-1'>
                        <button type='submit' className ='btn btn-light border border-3 py-2 px-4' >Add</button>
                    </div>
                </div>
            </form>
            <div className= "row d-flex">
                <ul>
                    {
                        selectedColor.map((coloringBox) => {
                            const inline = {
                                display: 'inline-block',
                                height: '100px',
                                width: '100px',
                                backgroundColor : coloringBox
                            }
                            return(
                                <p className = 'mx-5 my-5' style = {inline}></p>
                            )
                        }
                        ) 
                    }
                </ul>
            </div>
        </div>
    );
};

export default Box;