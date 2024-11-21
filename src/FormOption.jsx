import React from 'react';

function FormOption({ question, handleInputChange }) {
    switch (question.answerType) {
        case 'shortText':
            return (
                <input
                    type="text"
                    placeholder='Short answer text'
                    value={question.answer}
                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                    className='answer-input'
                />
            );
        case 'paragraph':
            return (
                <textarea
                    placeholder='Long answer text'
                    value={question.answer}
                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                    className='answer-input'
                />
            );
        case 'multipleChoice':
            return question.options.map((option, index) => (
                <div key={index}>
                    <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        onChange={(e) => handleInputChange(question.id, e.target.value)}
                    />
                    <label>{option}</label>
                </div>
            ));
        case 'checkbox':
            return question.options.map((option, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        value={option}
                        onChange={(e) => handleInputChange(question.id, e.target.value, 'checkbox')}
                    />
                    <label>{option}</label>
                </div>
            ));
        case 'dropdown':
            return (
                <select onChange={(e) => handleInputChange(question.id, e.target.value)} className='answer-input'>
                    <option value="">Select an option</option>
                    {question.options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            );
        case 'file':
            return (
                <input
                    type="file"
                    onChange={(e) => handleInputChange(question.id, e.target.files[0], 'fileUpload')}
                    className='answer-input'
                />
            );
        case 'date':
            return (
                <input
                    type="date"
                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                    className='answer-input'
                />
            );
        case 'time':
            return (
                <input
                    type="time"
                    onChange={(e) => handleInputChange(question.id, e.target.value)}
                    className='answer-input'
                />
            );
        default:
            return null;
    }
}

export default FormOption;
