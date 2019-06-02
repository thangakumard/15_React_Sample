"use strict"

//GET BOOKS
export function getBooks(books){
    return{
        type:"GET_BOOK"
    }
}

//POST BOOKS
export function postBooks(books){
    return {
        type: "POST_BOOK",
        payload: books
    }
}

//DELETE BOOKS
export function deleteBooks(_id){
    return {
        type: "DELETE_BOOK",
        payload: _id
    }
}

//UPDATE BOOKS
export function updateBooks(books){
    return {
        type: "UPDATE_BOOK",
        payload: books
    }
}