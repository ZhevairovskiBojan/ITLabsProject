const category = require('../../../pkg/category/categorySchema');

exports.getAllCategory = async (req, res) => {
    const categories = await category.find();

  res.send (categories);
};

exports.getOneCategory = async (req, res) => {
    try {
        const oneCategory = await category.findById(req.params.id);
        if (!oneCategory) {
            return res.status(404).json({
                status: 'fail',
                message: 'Category not found',
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                oneCategory,
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: 'Failed to fetch category',
        });
    }
};

exports.createCategory = async (req, res) => {
    try {
        const newCategory = await category.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                newCategory,
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data provided',
        });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const updateCategory = await category.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updateCategory) {
            return res.status(404).json({
                status: 'fail',
                message: 'Category not found',
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                updateCategory,
            },
        });

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data provided',
        });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) {
            return res.status(404).json({
                status: 'fail',
                message: 'Category not found',
            });
        }
        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: 'Failed to delete category',
        });
    }
};