const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product}],
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tags = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!tags) {
      res.status(404).json({ message: 'No product found with this id!'});
      return;
    }
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tags = await Tag.create(req.body);
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      },
    });

    if (!updatedTag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json({ message: 'Tag updated successfully!' });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedTags = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!deletedTags) {
      res.status(404).json({ message: 'No product found with this id!'});
      return;
    }
    res.status(200).json(deletedTags);
    
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;