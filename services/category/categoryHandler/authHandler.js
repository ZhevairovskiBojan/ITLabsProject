const category = require('../../../pkb/category/categorySchema');


exports.getAll = async (req, res) => {
    try {
        const categories = await category.find();
        res.status(200).json({
            status: 'success',
            data: {
                categories,
            }
        });
    }   catch (err){
        res.status(404).json({
            status: "fail",
            message: err,
        })
    };
};

exports.getOne = async (req,res) => {
    try {
        const oneCategory = await category.findById(req.params.id);
        res.status(200).json ({
            status: 'success',
            data: {
                oneCategory,
            }
        })

    }   catch (err){
        res.status(404).json({
            status: 'fail',
            message: err,
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
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.update = async (req, res) => {
    try {
        const updateCategory = await category.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                updateCategory,
            },
        });

    }   catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });

    }
};

exports.delete = async (req, res) => {
    try {
        await category.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'succsess',
            data: null,
        });

    }   catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};