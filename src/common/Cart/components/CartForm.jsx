import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../store/features/uiSlice';
import { createProduct } from '../../../store/features/productsSlice';
import { toast } from 'react-toastify';

export const CartForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: '',
        category: '',
    });
    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const onCancel = () => {
        dispatch(uiActions.setShowCartList());
    };
    const isFormValid = formData.category && formData.name;
    const onFormSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid) {
            console.log('field are required')
            return;
        }
        try {
            const { data } = await dispatch(createProduct(formData)).unwrap();
            // console.log(data)
            // navigate to show preview
            setFormData({
                name: '',
                description: '',
                image: '',
                category: '',
            })

        } catch (error) {
            toast.error(error)
        }
    };
    return (
        <div className="mx-3  overflow-y-auto">
            <h2 className="text-3xl font-semibold ">Add a new item</h2>
            <form
                onSubmit={onFormSubmit}
                className="flex flex-col  gap-5  pt-6 h-screen pb-20"
            >
                <div className="flex flex-col">
                    <label className="mb-2 text-sm" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full border-2 border-clrCottonSeed py-2 text-sm px-2 rounded-xl"
                        onChange={(e) => inputChangeHandler(e)}
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Enter a name"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 text-sm" htmlFor="description">
                        Note (optional)
                    </label>
                    <textarea
                        className="resize-none border-clrCottonSeed  w-full border-2 py-3 text-sm px-2 rounded-xl"
                        onChange={(e) => inputChangeHandler(e)}
                        id="description"
                        name="description"
                        cols="10"
                        rows="4"
                    ></textarea>
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 text-sm" htmlFor="image">
                        Image url (optional){' '}
                    </label>
                    <input
                        onChange={(e) => inputChangeHandler(e)}
                        className="w-full border-clrCottonSeed border-2 py-2 text-sm px-2 rounded-xl"
                        id="image"
                        name="image"
                        type="text"
                        placeholder="Enter image url"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 text-sm" htmlFor="category">
                        Category
                    </label>
                    <select
                        onChange={(e) => inputChangeHandler(e)}
                        className="w-full border-clrCottonSeed border-2 py-2 text-sm px-2 rounded-xl"
                        name="category"
                        id="category"
                    >
                        <option value="null">---select category---</option>
                        <option value="Fruit and Vegetables">Fruit and vegetables</option>
                        <option value="Meat and Fish">Meat and Fish</option>
                        <option value="Beverages">Beverages</option>
                    </select>
                </div>
                <div className="mt-auto flex justify-center gap-5">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="py-3 w-24 border-2 rounded-2xl"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="py-3 w-24 border-2 text-white bg-clrOrangePeel rounded-2xl"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};
