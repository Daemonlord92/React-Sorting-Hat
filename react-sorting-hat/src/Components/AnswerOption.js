import React from "react";
import PropTypes from 'prop-types';

const AnswerOption = (props) => {
    return(
        <li>
            <input
                type="radio"
                name='radioGroup'
                checked={props.answerType === props.answer}
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
                onChange={props.onAnswerSelected}
            />
            <label htmlFor={props.answerTypes}>{props.answerContent}</label>
        </li>
    );
}

AnswerOption.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
