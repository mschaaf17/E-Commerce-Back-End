const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include: [{
      model: product,
      attributes: ['product_id']
    }]
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attribute: ['id', 'tag_name'],
    include: [
      {
        model: Product,
        attributes: ['product_id']
      }
    ]
  })
  .then(dbTagData => {
    if(!dbTagData) {
      res.status(404).json({message: 'No tag found with this id'})
    }
    res.json(dbTagData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
    //other things to post or insert into 13.1.6?
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});


//unsure about the update syntax
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  //why the [0]?
  .then(dbTagData => {
    if(!dbTagData[0]) {
      res.status(404).json({message: 'No user found with this id'})
      return
    }
    res.json(dbTagData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destory({
    where: {
      id: req.params.id
    }
  })
  .then(dbTagData => {
    if(!dbTagData) {
      res.status(404).json({message: 'No user found with this id'})
    }
    res.json(dbTagData)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

module.exports = router;
