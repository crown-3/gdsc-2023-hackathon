import * as M from "@mantine/core";
import { BodySkeleton } from "../../components/Skeleton";

export default function MyLog() {
    return (
    <M.Stack align="center">
        <M.Title mt={30}>My Log</M.Title>
        <BodySkeleton></BodySkeleton>
    </M.Stack>
    );
}