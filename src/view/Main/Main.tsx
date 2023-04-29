import React from "react";
import * as M from "@mantine/core";
import { BodySkeleton } from "../../components/Skeleton";

export default function Main() {
    return (
    <M.Stack align="center">
        <M.Title mt={30}>Main Page</M.Title>
        <BodySkeleton></BodySkeleton>
    </M.Stack>
    );
}