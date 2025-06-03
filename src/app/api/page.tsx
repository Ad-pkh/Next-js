"use client"
import Button from "../component/buttton/page";
import { useState } from "react";
import Api from "./hook";
import Card from "../component/card/page";


{/* create api from json server book store {id tittle description} and also make page in client to access api */ }
export default function useApi() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Array<{ id: string; title: string; description: string }>>([]);


    const fetchData = async () => {
        setLoading(true);
        try {
            const result = await Api().get();
            setData(result as Array<{ id: string; title: string; description: string }>);
        } catch (err) {
            console.log("Something went wrong", err);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>

            <div className="m-4 flex flex-col items-center">
                <h1>Interact with API</h1>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        style={{ padding: 8 }}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        style={{ padding: 8 }}
                    />
                    <input
                        type="text"
                        placeholder="id"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        style={{ padding: 8 }}
                    />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex gap-4 mt-2">
                    <Button
                        onclick={fetchData}
                        width={120}
                        height={40}
                        text="Get Data"
                        color="blue"
                        margin={8}
                        padding={12}
                    />
                    <Button
                        onclick={async () => {
                            try {
                                const response = Api().post({ title, description });
                                console.log("POST data:", response);
                                setTitle("");
                                setDescription("");
                                alert("Book added successfully!");

                            } catch (error) {
                                console.error("Error posting book:", error);
                            }
                        }}
                        width={120}
                        height={40}
                        text="Post Data"
                        color="green"
                        margin={8}
                        padding={12}
                    />
                    <Button
                        onclick={async () => {
                            try {
                                const response = Api().put({ id, title, description });
                                console.log("updated :", response);
                                setTitle("");
                                setDescription("");
                                setId("");
                                alert("Book updated successfully!");
                            } catch (error) {
                                console.error("Error updating book:", error);
                            }
                        }}
                        width={120}
                        height={40}
                        text="Edit Data"
                        color="yellow"
                        margin={8}
                        padding={12}
                    />
                    <Button
                        onclick={async () => {
                            try {
                                const response = Api().del(id);
                                console.log("DELETEd :", response);
                                setId("");
                                alert("Book deleted successfully!");

                            } catch (error) {
                                console.error("Error deleting book:", error);
                            }
                        }}
                        width={120}
                        height={40}
                        text="Delete Data"
                        color="red"
                        margin={8}
                        padding={12}
                    />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 p-6">
                {loading && <p>Loading...</p>}

                {data && data.length > 0 && (
                    data.map((book) => (
                        <div key={book.id} className="flex justify-center basis-[300px]">
                            <Card id={book.id} title={book.title} description={book.description} />
                        </div>
                    ))
                )}
            </div>

        </>
    );
}