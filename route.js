const express = require("express");
const axios = require("axios");
const router = express.Router();
require('dotenv').config();

const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.APIKey}`
const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.APIKey}&query=`;
/**
 * User Login
 **/
router.post('/login', async (request, response) => {
    try {
        // Your login logic goes here
        // Send a success response
        response.status(200).json({ message: "Login successful" });
    } catch (error) {
        // Handle any errors that occurred
        response.status(500).json({ error: "An error occurred during login" });
    }
});

/**
 * User change Password
 **/
router.post('/changePassword', async (request, response) => {
    try {
        // Your change password logic goes here
        // Send a success response
        response.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
        // Handle any errors that occurred
        response.status(500).json({ error: "An error occurred while changing password" });
    }
});

/**
 * User reset Password
 **/
router.post('/resetPassword', async (request, response) => {
    try {
        // Your reset password logic goes here
        // Send a success response
        response.status(200).json({ message: "Password reset successfully" });
    } catch (error) {
        // Handle any errors that occurred
        response.status(500).json({ error: "An error occurred while resetting password" });
    }
});

/** 
 * All movies list
 **/
router.get('/movieslist', async (request, response) => {
    try {
        axios.get(APIURL)
            .then(res => {
                response.status(200).send(res.data.results || []);
            })
    } catch (error) {
        // Handle any errors that occurred
        response.status(500).json({ error: "An error occurred while retrieving movies list" });
    }
});

/** 
 * Get Details By movie Name
 * */
router.get('/movieByName', async (request, response) => {
    try {
        axios.get(SEARCHAPI + request.query.MovieName)
            .then(res => {
                response.status(200).send(res.data.results || []);
            })
    } catch (error) {
        // Handle any errors that occurred
        response.status(500).json({ error: "An error occurred while retrieving movie details" });
    }
});

module.exports = router;
