import React from "react";
import { Outlet } from "react-router-dom";
import PageLoading from "./common/page-loading";

const ProtectedRoute = () => {
    // Logic to validate token here

    return (
        <React.Suspense fallback={<PageLoading />}>
            <Outlet />
        </React.Suspense>
    );
};

export default ProtectedRoute;
