const API_URL = 'http://127.0.0.1:4000'

const SIGN_IN =
    'mutation($username:String!, $password:String!){signIn(username:$username, password:$password)}'

const SIGN_UP =
    'mutation($username:String!, $password:String!){signUp(username:$username, password:$password)}'

const GET_TASKLIST_BY_USERNAME =
    'query taskLists($username: String!) {\n' +
    '  taskLists(where: { owner: { username: $username } }) {\n' +
    '    id\n' +
    '    title\n' +
    '  }\n' +
    '}'

const CREATE_TASKLIST =
    'mutation($title: String!, $username: String!) {\n' +
    '    createTaskLists(\n' +
    '      input: {\n' +
    '        title: $title\n' +
    '        owner: { connect: { where: { username: $username } } }\n' +
    '      }\n' +
    '    ) {\n' +
    '      taskLists {\n' +
    '        id\n' +
    '        title\n' +
    '        owner {\n' +
    '          username\n' +
    '        }\n' +
    '      }\n' +
    '    }\n' +
    '  }'


    const DELETE_TASK_LIST =
    'mutation($id:ID){\n'+
   '     deleteTaskLists(where:{id:$id}){nodesDeleted}\n'+
  '    }'

export function deleteTaskLists (id,token) {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            query: DELETE_TASK_LIST,
            variables: {
                id:id
            }
        })
    })
        .then(response => {
            return response.json()
        })
        .then(jsonResponse => {
            if (jsonResponse.errors != null){
                throw(jsonResponse.errors[0].message)
            }
            return jsonResponse.data
        })
        .catch(error => {
            throw error
        })
}

export function signIn (username, password) {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: SIGN_IN,
            variables: {
                username: username,
                password: password
            }
        })
    })
        .then(response => {
            return response.json()
        })
        .then(jsonResponse => {
            if (jsonResponse.errors != null){
                throw(jsonResponse.errors[0].message)
            }
            return jsonResponse.data.signIn
        })
        .catch(error => {
            throw error
        })
}

export function signUp (username, password) {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: SIGN_UP,
            variables: {
                username: username,
                password: password
            }
        })
    })
        .then(response => {
            return response.json()
        })
        .then(jsonResponse => {
            if (jsonResponse.errors != null){
                throw(jsonResponse.errors[0].message)
            }
            return jsonResponse.data.signUp
        })
        .catch(error => {
            throw error
        })
}

export function getTaskListsByUsername (username, token) {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            query: GET_TASKLIST_BY_USERNAME,
            variables: {
                username: username,
            }
        })
    })
        .then(response => {
            return response.json()
        })
        .then(jsonResponse => {
            if (jsonResponse.errors != null){
                throw(jsonResponse.errors[0].message)
            }
            return jsonResponse.data.taskLists
        })
        .catch(error => {
            throw error
        })
}

export function createTaskLists (username, token, title) {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            query: CREATE_TASKLIST,
            variables: {
                username: username,
                title : title
            }
        })
    })
        .then(response => {
            return response.json()
        })
        .then(jsonResponse => {
            if (jsonResponse.errors != null){
                throw(jsonResponse.errors[0].message)
            }
            return jsonResponse.data.taskLists
        })
        .catch(error => {
            throw error
        })
}
