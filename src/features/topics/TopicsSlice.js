import { createSlice } from '@reduxjs/toolkit';

export const topics = createSlice({
    name: 'topics',
    initialState: {topics: {}},
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = action.payload
        },
        addQuizToTopic: (state, action) => {
            const { topicId, quizId } = action.payload
            state.topics[topicId].quizIds.push(quizId)
        }
    }
})

export const selectTopics = state => state.topics.topics
export const { addTopic, addQuizToTopic } = topics.actions
export default topics.reducer