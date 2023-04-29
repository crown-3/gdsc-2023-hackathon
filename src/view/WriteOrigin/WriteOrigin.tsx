import * as M from "@mantine/core";
import { BodySkeleton } from "../../components/Skeleton";

export default function WriteOrigin() {
    return (
    <M.Stack align="center">
        <M.Title mt={30}>Write Origin</M.Title>
        <BodySkeleton></BodySkeleton>
    </M.Stack>
    );
}