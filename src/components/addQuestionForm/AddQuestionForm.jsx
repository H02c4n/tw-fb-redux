import React, {useState} from 'react'
import { addQuestionToFirebase } from '../../auth/firebase';

const AddQuestionForm = () => {

    const[formData, setFormData] = useState({
        questionText:"",
        infoCode:"",
        options:{a:"", b:"", c:"", d:""},
        answer:"",
        teamwork:"",
    });


    const handleSubmit = (e) =>{
        e.preventDefault();
        addQuestionToFirebase(formData);
        console.log(formData);
    }

    const handleChange = level => (e) =>{
        const{name, value} = e.target;
        if (!level) {
            // Assume root level
            setFormData({
              ...formData,
              [name] : value
            })
          } else {
            setFormData({
              ...formData,
              [level]: {
                ...formData[level],
                [name] :value
              }
            })
          }
        };

        return (
    

            <div className="container pb-5">

            <div className="row">
            <div className="send-question col-md-8 offset-md-2">
                <form onSubmit={handleSubmit}>
                {/*Question*/}
                <div className="input-group mt-4 mb-3">
                    <span className="input-group-text">Question</span>
                    <input 
                    name="questionText"
                    value={formData.questionText}
                    onChange={handleChange()}
                    type="text" className="form-control" />
                </div>
                {/*infoCode*/}
                <div className="form-floating">
                    <textarea 
                    name="infoCode"
                    value={formData.infoCode}
                    onChange={handleChange()}
                     style={{resize: 'none', height: '240px'}} className="form-control" placeholder="Leave a comment here"  />
                    <label htmlFor="info-code">Code</label>
                </div>
                <hr />
                {/*Answers*/}
                <div className="input-group mb-3">
                    <span className="input-group-text">A</span>
                    <input
                    name="a"
                    value={formData.options.a}
                    onChange={handleChange("options")}
                    type="text" className="form-control" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">B</span>
                    <input
                    name="b" 
                    value={formData.options.b}
                    onChange={handleChange("options")}
                    type="text" className="form-control" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">C</span>
                    <input 
                    name="c"
                    value={formData.options.c}
                    onChange={handleChange("options")}
                    type="text" className="form-control" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">D</span>
                    <input 
                    name="d" 
                    value={formData.options.d}
                    onChange={handleChange("options")}
                    type="text" className="form-control" />
                </div>
                <div className="d-flex justify-content-between">
                    <div className="input-group w-25">
                    <span className="input-group-text d-inline-block">Answer</span>
                    <input 
                    name="answer" 
                    value={formData.answer}
                    onChange={handleChange()}
                    type="text" className="form-control d-inline-block" />
                    </div>
                    <div className="input-group w-25">
                    <span className="input-group-text d-inline-block">Teamwork</span>
                    <input
                    name="teamwork" 
                    value={formData.teamwork}
                    onChange={handleChange()}
                    type="text" className="form-control d-inline-block" />
                    </div>
                    <button type="submit" className="btn btn-success float-end">
                    Load
                    </button>
                </div>
                </form>
            </div>
            </div>
            </div>
    
  )
}

export default AddQuestionForm