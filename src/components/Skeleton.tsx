import React from "react";
import * as M from "@mantine/core";

function BodySkeleton() {
    return  (
        <M.Group>
            <M.Group w="100%" mt={30}>
                <M.Skeleton height={50} circle mb="xl" />
                <M.Skeleton height={8} radius="xl" />
                <M.Skeleton height={8} mt={6} radius="xl" />
                <M.Skeleton height={8} mt={6} width="70%" radius="xl" />
            </M.Group>
            <M.Group w="100%" mt={30}>
                <M.Skeleton height={50} circle mb="xl" />
                <M.Skeleton height={8} radius="xl" />
                <M.Skeleton height={8} mt={6} radius="xl" />
                <M.Skeleton height={8} mt={6} width="70%" radius="xl" />
            </M.Group>
        </M.Group>
    )
}

export {BodySkeleton};
