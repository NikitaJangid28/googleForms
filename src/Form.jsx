import React, { useState } from 'react';
import { FaBold, FaItalic, FaUnderline, FaLink, FaEraser } from "react-icons/fa";
import './form.css';
import FormOption from './FormOption';

function Form() {
    const [questions, setQuestions] = useState([{ id: 1, questionText: "", answerType: "shortText", answer: "", options: [] }]);
    const [isTitleFocused, setIsTitleFocused] = useState(false);
    const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);
    const [formTitle, setFormTitle] = useState("Untitled Form");
    const [formDescription, setFormDescription] = useState("Form Description");

    const addQuestion = () => {
        setQuestions([...questions, {
            id: questions.length + 1, questionText: "", answerType: "shortText", answer: "", options: []
        }]);
    };

    const handleQuestionTextChange = (id, text) => {
        const updateQuestions = questions.map((q) =>
            q.id === id ? { ...q, questionText: text } : q
        );
        setQuestions(updateQuestions);
    };

    const handleInputChange = (id, value, type = 'text') => {
        const updateQuestions = questions.map((q) =>
            q.id === id ? { ...q, answer: type === 'checkbox' ? [...q.answer, value] : value } : q
        );
        setQuestions(updateQuestions);
    };


    const handleAddOption = (id) => {
        const updatedQuestions = questions.map((q) => {
            if (q.id === id) {
                const newOption = `Option ${q.options.length + 1}`;
                return { ...q, options: [...q.options, newOption] };
            }
            return q;
        });
        setQuestions(updatedQuestions);
    };

    const handleDelete = (id, index) => {
        const updatedQuestions = questions.map((q) => {
            if (q.id === id) {
                const newOptions = [...q.options];
                newOptions.splice(index, 1);
                return { ...q, options: newOptions };
            }
            return q;
        });
        setQuestions(updatedQuestions);
    };
    return (
        <>
            <div className='form-container'>
                <input type="text"
                    className={`form-title-input ${isTitleFocused ? "focused" : ""}`}
                    value={formTitle}
                    onFocus={() => setIsTitleFocused(true)}
                    onBlur={() => setIsTitleFocused(false)}
                    onChange={(e) => setFormTitle(e.target.value)} />
               
                {isTitleFocused && (
                    <div className='formatting-options'>
                        <FaBold className='format-icon'></FaBold>
                        <FaItalic className='format-icon'></FaItalic>
                        <FaUnderline className='format-icon'></FaUnderline>
                        <FaLink className='format-icon'></FaLink>
                        <FaEraser className='format-icon'></FaEraser>
                    </div>
                )}

                <input type="text"
                    className={`form-description-input ${isDescriptionFocused ? "focused" : ""}`}
                    value={formDescription}
                    onFocus={() => setIsDescriptionFocused(true)}
                    onBlur={() => setIsDescriptionFocused(false)}
                    onChange={(e) => setFormDescription(e.target.value)} />
               
                {isDescriptionFocused && (
                    <div className='formatting-options'>
                        <FaBold className='format-icon'></FaBold>
                        <FaItalic className='format-icon'></FaItalic>
                        <FaUnderline className='format-icon'></FaUnderline>
                        <FaLink className='format-icon'></FaLink>
                        <FaEraser className='format-icon'></FaEraser>
                    </div>
                )}
            </div>

            {questions.map((question) => (
                <div key={question.id} className='question-container'>
                    <div className='form-question'>
                        <input type="text"
                            placeholder='Question'
                            className='question-input'
                            value={question.questionText}
                            onChange={(e) => handleQuestionTextChange(question.id, e.target.value)}
                        />
                        <select
                            value={question.answerType}
                            className='question-type-dropdown'
                            onChange={(e) => {
                                const updateQuestions = questions.map(q =>
                                    q.id === question.id ? { ...q, answerType: e.target.value } : q
                                );
                                setQuestions(updateQuestions);
                            }}>
                            <option value="shortText">Short answer</option>
                            <option value="paragraph">Paragraph</option>
                            <option value="multipleChoice">Multiple Choice</option>
                            <option value="checkbox">Checkboxes</option>
                            <option value="dropdown">Dropdown</option>
                            <option value="file">File Upload</option>
                            <option value="date">Date</option>
                            <option value="time">Time</option>
                        </select>
                    </div>
                    <div className='answer-container'>
                        <FormOption question={question} handleInputChange={handleInputChange} />
                    </div>
                    {(question.answerType === 'multipleChoice' || question.answerType === 'checkbox') && (
                        <div className='option-actions'>
                            <button onClick={() => handleAddOption(question.id)}>Add Option</button>
                        </div>
                    )}
                    <div className='form-actions'>
                <button onClick={addQuestion} className='add-question-button'>Add Question</button>
                <button className='delete-question-button'>Delete</button>
            </div>
                </div>
            ))}

            
        </>
    );
}

export default Form;
