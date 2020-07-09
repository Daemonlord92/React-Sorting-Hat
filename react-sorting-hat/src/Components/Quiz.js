import React from "react";
import PropTypes from 'prop-types';
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import AnswerOption from "./AnswerOption";

const Quiz = (props) => {
    return (
        <div>
            <QuestionCount counter={props.questionId} total={props.questionTotal}></QuestionCount>
            <Question content={props.question}></Question>
            <ul>
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
        </div>
    );
}

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;