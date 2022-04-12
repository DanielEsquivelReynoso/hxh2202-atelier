// const config = require('../config.js');
require('dotenv').config();
// console.log(process.env);
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let PORT = process.env.PORT || 3005;
const axios = require('axios');

let app = express();

// serves all static files and generated assets in ../../client/dist
app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use(express.json());

var apiURL = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp`;
// console.log(process.env.REACT_APP_API_KEY);


if (!process.env.REACT_APP_API_KEY) {
  throw new Error('Please supply the appropriate API Key in .env file for REACT_APP_API_KEY');
}

/*
================================================================================================
                                  CALLS TO API FOR PRODUCT
================================================================================================
*/

// This is the '/product' call, for all products, likely to be used in the catalog page.
app.get('/products', (req, res) => {
  // console.log('server is working', process.env.REACT_APP_API_KEY);
  let options = {
    method: 'GET',
    url: apiURL + req.url,
    headers: {
      'Authorization': `${process.env.REACT_APP_API_KEY}`,
    },
    params: {
      count: 10
    }
  };

  axios(options)
    .then((result) => {
      // console.log(result);
      res.send(result.data);
    })
    .catch((err)=>console.log(err));
});

// This is the call for a single product, likely to be used when a single product needs to be rendered.
app.get('/products/:product_id', (req, res) => {

  let options = {
    method: 'GET',
    url: apiURL + req.url,
    headers: {
      'Authorization': `${process.env.REACT_APP_API_KEY}`
    }
  };

  axios(options)
    .then((result) => {
      res.send(result.data);
    });
});

// This is the call for a single product's styles, which will be for the overview section
app.get('/products/:product_id/styles', (req, res) => {

  let options = {
    method: 'GET',
    url: apiURL + req.url,
    headers: {
      'Authorization': `${process.env.REACT_APP_API_KEY}`
    }
  };

  axios(options)
    .then((result) => {
      res.send(result.data);
    });

});

// This is the call for the related items, to be used in the related products section
app.get('/products/:product_id/related', (req, res) => {

  let options = {
    method: 'GET',
    url: apiURL + req.url,
    headers: {
      'Authorization': `${process.env.REACT_APP_API_KEY}`
    }
  };

  axios(options)
    .then((result) => {
      res.send(result.data);
    });

});

/*
================================================================================================
                                  CALLS TO API FOR REVIEWS
================================================================================================
*/

// This is the call for the reviews of a specific item, to be used in the reviews section
app.get('/reviews', (req, res) => {

  let options = {
    method: 'GET',
    url: apiURL + req.url,
    headers: {
      'Authorization': `${process.env.REACT_APP_API_KEY}`
    },
    params: {
      page: 1,
      // count: 10,
      product_id: 65631
    }
  };

  axios(options)
    .then((result) => {
      res.send(result.data);
    });

});

app.get('/reviews/meta', (req, res) => {

  let options = {
    method: 'GET',
    url: apiURL + req.url,
    headers: {
      'Authorization': `${process.env.REACT_APP_API_KEY}`
    },
    params: {
      product_id: 65632
    }
  };

  axios(options)
    .then((result) => {
      res.send(result.data);
    });

});

app.post('/reviews', (req, res) => {
  let postObj = req.body;
  console.log('postObj', postObj);
  let options = {
    method: 'POST',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews',
    headers: {
      'Authorization': `${process.env.REACT_APP_API_KEY}`
    },
    data: {
      product_id: postObj.product_id,
      rating: postObj.rating,
      summary: postObj.summary,
      body: postObj.body,
      recommend: postObj.recommend,
      name: postObj.name,
      email: postObj.email,
      phtos: postObj.photos,
      characteristics: postObj.characteristics
    }
  };

  axios(options)
    .then((result) => {
      res.send(result.data);
    });

});

app.put('/reviews/helpful', (req, res) => {
  const productId = req.query.id;
  console.log('productId', productId);
  let options = {
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/${productId}/helpful`,
    headers: {
      'Authorization': `${process.env.REACT_APP_API_KEY}`
    },
  };

  axios(options)
    .then((result) => {
      res.send(result.data);
    });

});

app.put('/reviews/report', (req, res) => {
  const productId = req.query.id;
  console.log('productId', productId);
  let options = {
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/${productId}/report`,
    headers: {
      'Authorization': `${process.env.REACT_APP_API_KEY}`
    }
  };

  axios(options)
    .then((result) => {
      res.send(result.data);
    });

});

/*
================================================================================================
                                  CALLS TO API FOR QUESTIONS AND ANSWERS
================================================================================================
*/

app.get('/qa/questions', (req, res) => {

  let options = {
    method: 'GET',
    url: apiURL + req.url,
    headers: {
      'Authorization': `${process.env.REACT_APP_API_KEY}`
    },
    params: {
      count: 10,
      product_id: 65631
    }
  };

  axios(options)
    .then((result) => {
      res.send(result.data);
    });

});

// ==== IN PROGRESS ==== question_id to use: 573866
app.get('/qa/questions/:question_id/answers', (req, res) => {

  let options = {
    method: 'GET',
    url: apiURL + req.url,
    headers: {
      'Authorization': `${process.env.REACT_APP_API_KEY}`
    },
    params: {
      count: 10
    }
  };

  axios(options)
    .then((result) => {
      res.send(result.data);
    });

});

// Body Parameters: Body, name, email, product_id

// ==== IN PROGRESS ====
app.post('/qa/questions', (req, res) => {

  let options = {
    method: 'POST',
    url: apiURL + req.url,
    headers: {
      'Authorization': `${process.env.REACT_APP_API_KEY}`
    },
    params: {
      product_id: 65632
    }
  };

  axios(options)
    .then((result) => {
      res.send(result.data);
    });

});

// ==== IN PROGRESS ==== question_id to use: 573866
app.post('/qa/questions/:question_id/answers', (req, res) => {

  let options = {
    method: 'POST',
    url: apiURL + req.url,
    headers: {
      'Authorization': `${process.env.REACT_APP_API_KEY}`
    },
    params: {
      // Unclear, in progress.
    }
  };

  axios(options)
    .then((result) => {
      res.send(result.data);
    });

});

app.put('/qa/questions/:question_id/helpful', (req, res) => {

  let options = {
    method: 'PUT',
    url: apiURL + req.url,
    headers: {
      'Authorization': `${process.env.REACT_APP_API_KEY}`
    },
    params: {
      // Unclear, in progress.
    }
  };

  axios(options)
    .then((result) => {
      res.send(result.data);
    });

});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
