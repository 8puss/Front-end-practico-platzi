const express = require('express');
//middlewares header files
const validatorHandler = require('../../middlewares/validatorHandler');
//router
const router = express.Router();
const options = {
    root: "../E-commerce-practico-platzi/public/templates/"
}
//adding static files
router.use('/styles', express.static('../E-commerce-practico-platzi/public/styles'));
router.use('/assets', express.static('../E-commerce-practico-platzi/assets/'));

router.get('/', async (req, res) => {
    let home = "index.html";
    res.sendFile(home, options, function callback(err) {
        if (err) {
            next(err);
        } else {
            console.log("Sent: ", home);
        }
    })
});

router.get('/myorder', async (req, res) => {
  let myOrder = "myorder.html";
  res.sendFile(myOrder, options, function callback(err) {
      if (err) {
          next(err);
      } else {
          console.log("Sent: ", myOrder);
      }
  })
});

router.get('/account', async (req, res) => {
  let account = "account.html";
  res.sendFile(account, options, function callback(err) {
      if (err) {
          next(err);
      } else {
          console.log("Sent: ", account);
      }
  })
});

router.get('/changePassword', async (req, res) => {
  let changePassword = "change-passwd.html";
  res.sendFile(changePassword, options, function callback(err) {
      if (err) {
          next(err);
      } else {
          console.log("Sent: ", changePassword);
      }
  })
});

router.get('/custom-acc', async (req, res) => {
  let customAcc = "custom-acc.html";
  res.sendFile(customAcc, options, function callback(err) {
      if (err) {
          next(err);
      } else {
          console.log("Sent: ", customAcc);
      }
  })
});

router.get('/menu', async (req, res) => {
  let menu = "desktop-menu.html";
  res.sendFile(menu, options, function callback(err) {
      if (err) {
          next(err);
      } else {
          console.log("Sent: ", menu);
      }
  })
});

router.get('/emailsent', async (req, res) => {
  let emailsent = "emailsent.html";
  res.sendFile(emailsent, options, function callback(err) {
      if (err) {
          next(err);
      } else {
          console.log("Sent: ", emailsent);
      }
  })
});

router.get('/login', async (req, res) => {
  let login = "login.html";
  res.sendFile(login, options, function callback(err) {
      if (err) {
          next(err);
      } else {
          console.log("Sent: ", login);
      }
  })
});

router.get('/mobile', async (req, res) => {
  let mobile = "mobile-menu.html";
  res.sendFile(mobile, options, function callback(err) {
      if (err) {
          next(err);
      } else {
          console.log("Sent: ", mobile);
      }
  })
});

router.get('/myorders', async (req, res) => {
  let myOrders = "my-orders.html";
  res.sendFile(myOrders, options, function callback(err) {
      if (err) {
          next(err);
      } else {
          console.log("Sent: ", myOrders);
      }
  })
});

router.get('/product', async (req, res) => {
  let product = "producto.html";
  res.sendFile(product, options, function callback(err) {
      if (err) {
          next(err);
      } else {
          console.log("Sent: ", product);
      }
  })
});

router.get('/shoppingCart', async (req, res) => {
  let shoppingCart = "shopping-cart.html";
  res.sendFile(shoppingCart, options, function callback(err) {
      if (err) {
          next(err);
      } else {
          console.log("Sent: ", shoppingCart);
      }
  })
});
//exportar modulo
module.exports = router;
