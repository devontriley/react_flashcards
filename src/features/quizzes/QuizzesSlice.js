import { createSlice } from '@reduxjs/toolkit';
import { addQuizToTopic } from "../topics/TopicsSlice";

export const quizzes = createSlice({
    name: 'quizzes',
    initialState: {quizzes: {}},
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes = {
                ...state.quizzes,
                [action.payload.id]: action.payload
            }
        }
    }
})

export const addQuizForTopicId = quiz => {
    const { id, topicId } = quiz
    return (dispatch) => {
        dispatch(addQuiz(quiz))
        dispatch(addQuizToTopic({topicId: topicId, quizId: id}))
    }
}

export const selectQuizzes = state => state.quizzes.quizzes
export const { addQuiz } = quizzes.actions
export default quizzes.reducer