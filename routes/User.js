const router = require('express').Router();
const cacheName = "users";
const User = require('../models/user.model');

router.get('/', async (req, res) => {
    try {
        const user = await User.findAll();
        console.log(user);
        res.status(200).json({
          status: true,
          data: user,
          message: 'data',
        });
    } catch (error) {    
      console.error('Error creating user:', error);
      res.status(500).json({ 
          status: false,
          message: 'Internal service error' 
      });
    }
});

router.post('/create', async (req, res) => {
    try {
        const static_request = {email: 'user1@gmail.com', password: '123456789'};
        const user = await User.create(static_request);
        console.log(user.toJSON());
        let data = user.toJSON();
        
        res.status(200).json({
          status: true,
          data,
          message: 'data',
        });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            // Error de restricción de unicidad
            return res.status(400).json({message: 'There is already a user using this e-mail.', error: error.errors.map(err => err.message)});
        } else if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ message: 'Error de validación', errors: error.errors });
        } else if (error.name === 'SequelizeForeignKeyConstraintError') {
            return res.status(400).json({ message: 'Error de restricción de clave foránea.' });
        }
        
        console.error('Error creating user:', error);
        res.status(500).json({ 
            status: false,
            message: 'Internal service error' 
        });
    }
  
  });


module.exports = router;
