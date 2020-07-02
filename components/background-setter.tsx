import React from "react";

import { Flex } from "./primitives/styled-rebass";

interface BackgroundSetterProps {
  bgImage?: string;
  children: React.ReactChildren | React.ReactChild;
  opacity: number;
}

export function BackgroundSetter({
  bgImage,
  children,
  opacity,
}: BackgroundSetterProps) {
  return (
    <Flex
      sx={{
        backgroundImage: `linear-gradient( 75deg, rgba(210,48,120, ${opacity}) 6%, rgba(254,97,97, ${opacity}) 74%, rgba(255,121,85, ${opacity}) 100%)`,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Flex
        sx={{
          backgroundImage: bgImage
            ? bgImage
            : `url(https://eddie-atlas-travel.s3.us-west-2.amazonaws.com/images/splash-bg-transparency.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIDywR3Dd8AtxIA5m6WyDnlWpuw1Um0RH%2Fmn97FLxGtFWAiEAjtGZPsBU4BeAJX6m11mAFshQcvZVummVx40l5h9n3acqsAEIYRAAGgw5NDIzOTQ5MjA1MTIiDP5GFRnPhPZ9A9qboCqNAeAwPlLUf0vPSrBl6uw2l%2Fs%2FN25CB0JRuWu7lCV0Xrf%2Bu9M8E14t0aq08n8pe2y2HNEnFdG6NWr%2BtGUYxqWHegGXvz%2BOJdv23VVm8OwqkzdCyEgo3DjpgeczB9%2BNJt0zLvYOEe%2FUNDQrybmQ4SP8AgetnSkBrnVLE5NSgr4lJ%2Bd76Y8%2BKq1AHpSJxvzTojCQjfj3BTqhAu1W7vrC%2B2RdeLgws3FAACNn9CV%2FZ6FqQKzzb82WxwAYb5Cf3JgnFw%2Ba%2BR%2FHLr44nfSbWO6eremwgbGpt5wbGbCrGUy0HvKMBSFMhMv7tjfIeVrTHfujOBnteY9cD9dgkUHYBapQ42r2NyPkY6iPDX%2BV%2F2SbA57yS%2B5ZHezL0%2FJhp9Val96GNNSTfoGE3isGFA%2BZnuW9G%2B%2FF76iD39h7iu8MvQuuTtCPBXqsjQ2b9WvJGzwhOe5wIXxjRtWMlKYheLetzLyQRc%2FweDDz3PPFLzDVGs6QfDobf6a00Kvgp%2Fbj6vYgL0eB25mpaXwXGa8R30OdVQqSEDqURwAMBv12vPGOW%2FHyqEAQ3q79KJhi4hoK%2BEScMyYW4gmIeaFi60q08wY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200702T184507Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5W2Y5JZAJFYFRLMQ%2F20200702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=3cbe81257451d0c7d3a840ccd1e915986f7485d0cc81169e8747192299b57904)`,
          backgroundSize: "cover",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
}
