const supplier = require('../../pkg/suppliers/suppliersSchema');


exports.getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await supplier.find();
        res.status(200).json({
            status: 'success',
            data: {
                suppliers,
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.getOneSupplier = async (req, res) => {
    try {
        const oneSupplier = await supplier.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                oneSupplier,
            }
        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.createSupplier = async (req, res) => {
    try {
        const newSupplier = await supplier.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                newSupplier,
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.updateSupplier = async (req, res) => {
    try {
        const updatedSupplier = await supplier.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                updatedSupplier,
            },
        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });

    }
};

exports.deleteSupplier = async (req, res) => {
    try {
        await supplier.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null,
        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};
