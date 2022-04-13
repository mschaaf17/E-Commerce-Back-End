const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    //do i need this attribute and order?
    // attributes: ['id', 'category_name'],
    // order: [['created_at', 'DESC']],
  include: [
    {
      //since i am unsure of array syntax for products: how do i set up the include?
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock']
    }

  ]
  }).then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(404).json ({message: 'No categories found'})
    }
   res.json(dbCategoryData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
    // be sure to include its associated Products
});
})

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        //instead of putting the cateogry_id in the cateogry js do I place it here?
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
        //['id', 'product_name', 'price', 'stock']
      }
    ]
    })
    .then(dbCategoryData => {
      if(!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id'})
        return;
      }
      res.json(dbCategoryData)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    //do i use individual hooks?
   // individualHooks: true,
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    //why a 0 in array?
    if(!dbCategoryData[0]) {
      res.status(404).json({message: 'No category found with this id'})
    return;
    }
    res.json(dbCategoryData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
Category.destroy({
  where: {
    id: req.params.id
  }
})
.then(dbCategoryData => {
  if(!dbCategoryData) {
    res.status(404).json({message: 'No category found with this id'})
    return
  }
  res.json(dbCategoryData)
})
.catch(err => {
  console.log(err)
  res.status(500).json(err)
})
  });

module.exports = router;
