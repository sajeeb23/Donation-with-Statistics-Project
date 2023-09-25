import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center my-64">
            <h1 className="text-9xl font-bold">404</h1>
            <p className="text-6xl mt-4">This page does not exist</p>
            <Link to={"/"} className="btn btn-outline mt-5">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;