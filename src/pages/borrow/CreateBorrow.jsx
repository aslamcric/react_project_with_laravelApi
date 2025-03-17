import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateBorrow = () => {
    const baseUrl = "http://localhost/Library_Exam/admin";
    const navigation = useNavigate();



    const [reader, setReader] = useState([]);
    const [selectReader, setselectReader] = useState(null);
    const [cart, setCart] = useState([]);
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [staffId, setStaffId] = useState(null);

    const [categories, setcategories] = useState({})
   

    const handleReaderChange = (e) => {
        const { value } = e.target;
        setselectReader(JSON.parse(value));
    };

    const handleBookChange = (e) => {
        const { value } = e.target;
        let book= JSON.parse(value);
        let categoryname= categories.find((item, i)=>( item.id == book.category_id))

        console.log("categoryname",categoryname);
        console.log(book);

        const selectBook={
            ...book,
            category_name:categoryname.name
        }
        
          


        setSelectedBook(selectBook);
    };

    const addBookToCart = () => {
        if (selectedBook) {
            if (cart.find((b) => b.id === selectedBook.id)) {
                toast.error("This book is already in the cart!");
            } else {
                setCart([...cart, selectedBook]);
                toast.success(`${selectedBook.title} added to the cart.`);
            }
        } else {
            toast.error("Please select a book first.");
        }
    };

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((book) => book.id !== id);
        setCart(updatedCart);
        toast.info("Book removed from the cart.");
    };

    const processBorrow = () => {
        if (!selectReader) {
            toast.error("Please select a reader.");
            return;
        }
        if (!staffId) {
            toast.error("Please select a librarian.");
            return;
        }
        if (cart.length === 0) {
            toast.error("No books selected for borrowing.");
            return;
        }

        const borrowDetails = {
            reader_id: selectReader.id,
            books: cart,
            staff_id:staffId,
            issueDate: new Date().toISOString(),
            dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        };

        console.log(borrowDetails);
        

        axios.post(baseUrl + "/api/borrow/process_react", borrowDetails)
            .then((res) => {
                // console.log(res);
                 
                toast.success("Books borrowed successfully!");
                setCart([]);
            })
            .catch((error) => {
                console.error("Error processing borrow:", error);
                toast.error("Failed to process borrow.");
            });
            navigation("/allborrow");
    };

    const FetchReader = async () => {
        try {
            const res = await axios.get(baseUrl + "/api/reader/");
            if (res.data?.readers) {
                setReader(res.data.readers);
            } else {
                console.error("Invalid response format");
            }
        } catch (error) {
            console.error("Error fetching readers:", error);
        }
    };
    const Category = async () => {
        try {
            const res = await axios.get(baseUrl + "/api/Category/");
            if (res.data?.categories) {
                setcategories(res.data.categories);
                console.log(res);
                
            } else {
                console.error("Invalid response format");
            }
        } catch (error) {
            console.error("Error fetching readers:", error);
        }
    };

    const FetchBooks = async () => {
        try {
            const res = await axios.get(baseUrl + "/api/book/");
            if (res.data?.books) {
                setBooks(res.data.books);
                //console.log(res);
                
            } else {
                console.error("Invalid response format");
            }
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    useEffect(() => {
        FetchReader();
        FetchBooks();
        Category()
    }, []);

    return (
        <div className="container my-2">
            <ToastContainer />
            <div className="receipt bg-white border rounded shadow-sm p-4">
                <div className="receipt-header text-center mb-4">
                    <h1 className="h4">Village Library Movement</h1>
                    <p className="text-muted">
                        Book Receipt <hr />
                    </p>
                </div>

                {/* Reader Selection */}
                <table className="table table-borderless mb-4">
                    <tbody>
                        <tr>
                            <th className="text-start">Reader Name:</th>
                            <td>
                                <select onChange={handleReaderChange} className="form-select">
                                    <option value="">Select Reader</option>
                                    {reader?.map((data) => (
                                        <option value={JSON.stringify(data)} key={data.id}>
                                            {data.name}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th className="text-start">Membership ID:</th>
                            <td>{selectReader?.id || "N/A"}</td>
                        </tr>
                        <tr>
                            <th className="text-start">Contact:</th>
                            <td>{selectReader?.phone || "N/A"}</td>
                        </tr>
                        <tr>
                            <th>Issue Date:</th>
                            <td>{new Date().toLocaleDateString()}</td>
                        </tr>
                        <tr>
                            <th>Due Date:</th>
                            <td>{new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</td>
                        </tr>
                        <tr>
                            <th>Librarian:</th>
                            <td>
                                <select
                                    onChange={(e) => setStaffId(e.target.value)}
                                    className="form-select"
                                >
                                    <option value="">Select Librarian</option>
                                    <option value="1">Librarian A</option>
                                    <option value="2">Librarian B</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Book Selection */}
                <h5 className="mb-3">Available Books</h5>
                <div className="d-flex mb-3">
                    <select onChange={handleBookChange} className="form-select me-2">
                        <option value="">Select Book</option>
                        {books?.map((data) => (
                            <option value={JSON.stringify(data)} key={data.id}>
                                {data.title}
                            </option>
                        ))}
                    </select>
                    <button className="btn btn-info" onClick={addBookToCart}>
                        Add to List
                    </button>
                </div>

                {/* Display Cart Items */}
                <h5 className="mt-4">Selected Books</h5>
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.length > 0 ? (
                            cart.map((book, index) => (
                                <tr key={book.id}>
                                    <td>{index + 1}</td>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.category_name}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => removeFromCart(book.id)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No books in the cart.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="text-end">
                    <button className="btn btn-primary" onClick={processBorrow}>
                        Borrow
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateBorrow;
