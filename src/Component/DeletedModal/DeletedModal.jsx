"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";







const DeletedModal = ({ propertyDetails }) => {

    const { _id, propertytitle} = propertyDetails

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5002/property/${_id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
            
        })
        const data = await res.json()
        if (data) {
            toast.warning(' Property Deleted !')
            redirect('/buy')
        }
    }



    return (
        <div>
            <AlertDialog>
                <Button className={'rounded-md text-red-400 border-red-400'} variant="outline"><TrashBin></TrashBin> Delete</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete Property permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong className="font-bold text-black">{propertytitle}</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button className={'rounded-md'} slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleDelete} className={'rounded-md'} variant="danger">
                                    Delete Property
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeletedModal;