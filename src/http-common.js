import React from 'react';
import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:8001/api",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MkBmYWtlbWFpbC5jb20iLCJleHAiOjE2MzI3OTYyODYsImlhdCI6MTYzMjc2MDI4Nn0.5ZpSxrKXgiYR0pdkbCK5lg17DIP3QmJihqIjvXXJpR4"
    }
});

