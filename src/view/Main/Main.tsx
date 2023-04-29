import React from "react";
import * as M from "@mantine/core";
import { BodySkeleton } from "../../components/Skeleton";


export default function Main() {
    return (
    <M.Stack>
        <M.Title>Main Page</M.Title>
        <BodySkeleton></BodySkeleton>
    </M.Stack>
    );
}