'use client'
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from '@heroui/react';
import React, { useRef } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa6";

const AddSellForm = () => {
    const formRef = useRef();
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='mt-36 max-w-7xl mx-auto'>
            <h1 className='font-bold text-3xl mt-2 pb-5'>Showcase Your Premium Property</h1>
            <Card className=' rounded-md shadow-md border border-white/20 max-w-6xl mx-auto'>
                <form
                    ref={formRef}
                    onSubmit={onSubmit}
                    className="p-10 space-y-8 "
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Name */}
                        <div className="md:col-span-2 grid grid-cols-2 gap-5">
                            <TextField name="name" isRequired>
                                <Label>Name</Label>
                                <Input placeholder="Enter Your Name" className="rounded-md" />
                                <FieldError />
                            </TextField>
                            <TextField name="email" isRequired>
                                <Label>Email</Label>
                                <Input placeholder="Enter Your Email" className="rounded-md" />
                                <FieldError />
                            </TextField>

                            <TextField name="number" isRequired>
                                <Label>Phone Number</Label>
                                <Input placeholder="Enter Your Phone Number" className="rounded-md" />
                                <FieldError />
                            </TextField>

                            {/* Image URL - Removed preview */}
                            
                                <TextField name="imageUrlsellar" isRequired>
                                    <Label>Image URL</Label>
                                    <Input
                                        type="url"
                                        placeholder="https://example.com/your-paradise.jpg"
                                        className="rounded-md"
                                    />
                                    <FieldError />
                                </TextField>
                            

                        </div>

                        <div className='md:col-span-2'>

                            <TextField name="propertytitle" isRequired>
                                <Label>Property Title</Label>
                                <Input placeholder="Enter Property Title" className="rounded-md" />
                                <FieldError />
                            </TextField>

                        </div>
                        {/* Country */}
                        <TextField name="location" isRequired>
                            <Label>Location</Label>
                            <Input placeholder="Property Location" className="rounded-md" />
                            <FieldError />
                        </TextField>

                        {/* Category - Updated Select Component */}
                        <div>
                            <Select
                                name="category"
                                isRequired
                                className="w-full"
                                placeholder="Select category"
                            >
                                <Label>Property Type</Label>
                                <Select.Trigger className="rounded-md">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="apartment" textValue="Apartment">
                                            Apartment
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="house" textValue="House">
                                            House
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="land" textValue="Land">
                                            Land
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="office" textValue="Office">
                                            Office
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="palace" textValue="Palace">
                                            Palace
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Price */}
                        <TextField name="price" type="number" isRequired>
                            <Label>Price (USD)</Label>
                            <Input
                                type="number"
                                placeholder="1299"
                                className="rounded-md"
                            />
                            <FieldError />
                        </TextField>

                        {/* Duration */}
                        <TextField name="areasize" isRequired>
                            <Label>Area Size (sqft)</Label>
                            <Input
                                placeholder="120(sqft)"
                                className="rounded-md"
                            />
                            <FieldError />
                        </TextField>

                        {/* Departure Date */}
                        <div className="md:col-span-2">
                            <TextField name="departureDate" type="date" isRequired>
                                <Label>Departure Date</Label>
                                <Input type="date" className="rounded-md" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Image URL - Removed preview */}
                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired>
                                <Label>Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/bali-paradise.jpg"
                                    className="rounded-md"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label>Description</Label>
                                <TextArea
                                    placeholder="Describe..."
                                    className="rounded-md"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    {/* Buttons */}

                    <div className='flex items-center gap-2'>
                        <Button onClick={
                            () => formRef.current.reset()
                        } variant='outline' className={'text-red-400 rounded-md border-red-400'}>
                            <RiDeleteBin6Line />
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            variant="outline"

                            className=" rounded-md bg-black text-white font-bold"
                        >
                            <FaWpforms />
                            Add Property
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default AddSellForm;