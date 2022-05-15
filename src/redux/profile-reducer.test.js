/*
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'ho'}
    ],

};

test('length of posts should', () => { // имя теста , колбек которій будет тестом передаем
    // 1.test data
    let action = addPostActionCreator("hi") // формируем action
    // 2.action
    let newState = profileReducer(state, action); // предаем state i action  и получим новій стейт и если ответ тот которій мі ожидали то все ок
    // 3.expectation
    expect(newState.posts.length).toBe(3); // ожидаемый результат будет массив из 3 элементов
});

test('message of new post should be correct', () => {
    let action = addPostActionCreator("hi")

    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe("hi");
});


test('after deleting length of messages should be decrement', () => { // имя теста , колбек которій будет тестом передаем
    // 1.test data
    let action = deletePost(1) // формируем action
    // 2.action
    let newState = profileReducer(state, action); // предаем state i action  и получим новій стейт и если ответ тот которій мі ожидали то все ок
    // 3.expectation
    expect(newState.posts.length).toBe(1); // ожидаемый результат будет массив из 1 элементов
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1.test data
    let action = deletePost(167) // формируем action
    // 2.action
    let newState = profileReducer(state, action);
    // 3.expectation
    expect(newState.posts.length).toBe(2);
});
*/



